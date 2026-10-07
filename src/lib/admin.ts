import { createMiddleware, createServerFn } from "@tanstack/react-start";
import { getRuntimeEnv } from "./runtime-env.server.ts";
import { z } from "zod";

const adminMiddleware = createMiddleware({ type: "function" })
  .client(async ({ next }) => {
    const { getBearerToken } = await import("@/lib/auth/client");
    return next({
      sendContext: { bearerToken: getBearerToken() ?? undefined },
    });
  })
  .server(async ({ next, context }) => {
    const { isLocalAdminBypassAllowed, LOCAL_ADMIN_USER_ID } =
      await import("@/lib/admin-access.server");
    if (isLocalAdminBypassAllowed()) {
      return next({ context: { userId: LOCAL_ADMIN_USER_ID } });
    }

    const { assertSameSiteRequest } = await import("@/lib/auth/isolation.server");
    const { requireUserId } = await import("@/lib/auth/verify.server");
    assertSameSiteRequest();
    return next({
      context: { userId: await requireUserId(context.bearerToken) },
    });
  });

const httpsUrl = (value: string) => {
  if (value.startsWith("/")) return true;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
};

const projectSchema = z.object({
  id: z.string().min(1).max(100),
  name: z.string().trim().min(1).max(120),
  subtitle: z.string().trim().min(1).max(160),
  description: z.string().trim().min(1).max(3000),
  stack: z.array(z.string().trim().min(1).max(60)).max(20),
  demo: z.string().trim().max(300),
  github: z.string().trim().max(300),
  status: z.string().trim().min(1).max(60),
  image: z
    .string()
    .min(1)
    .max(1_600_000)
    .refine(
      (value) => value.startsWith("data:image/webp;base64,") || httpsUrl(value),
      "Ảnh cần là đường dẫn http(s) hoặc ảnh WebP đã tải lên.",
    ),
  imagePos: z.string().max(80),
  video: z
    .string()
    .max(1000)
    .refine((value) => !value || httpsUrl(value), "Video cần là URL http(s).")
    .optional(),
  category: z.enum(["ai", "web", "business"]),
  features: z.array(z.string().trim().min(1).max(300)).max(20),
});

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(1).max(5000),
});

const messageStateSchema = z.object({
  id: z.string().min(1).max(100),
  state: z.enum(["read", "unread", "archive", "restore"]),
});

export const listPublishedProjects = createServerFn({ method: "GET" }).handler(async () => {
  const { getPublishedProjects } = await import("@/lib/admin.server");
  return getPublishedProjects();
});

export const getAdminSignInAvailability = createServerFn({
  method: "GET",
}).handler(async () => {
  const { getRequest } = await import("@tanstack/react-start/server");
  const request = getRequest();
  const host = request?.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";
  const appOAuthClientConfigured = Boolean(
    (getRuntimeEnv("VITE_DIRECT_GOOGLE_AUTH")?.trim() === "true" &&
      getRuntimeEnv("GOOGLE_CLIENT_ID")?.trim() &&
      getRuntimeEnv("GOOGLE_CLIENT_SECRET")?.trim()) ||
      (getRuntimeEnv("GROK_AUTH_CLIENT_ID")?.trim() &&
        getRuntimeEnv("GROK_AUTH_CLIENT_SECRET")?.trim()),
  );
  const isGrokPreview = host.endsWith(".grok-sandbox.com");
  const { isLocalAdminBypassAllowed } = await import("@/lib/admin-access.server");

  return {
    available: appOAuthClientConfigured || isGrokPreview,
    localAddress: host === "localhost" || host === "127.0.0.1" || host === "[::1]",
    localAdminBypass: isLocalAdminBypassAllowed(),
  };
});

export const getAdminDashboard = createServerFn({ method: "GET" })
  .middleware([adminMiddleware])
  .handler(async ({ context }) => {
    const { getAdminDashboard: loadDashboard } = await import("@/lib/admin.server");
    return loadDashboard(context.userId);
  });

export const saveAdminProject = createServerFn({ method: "POST" })
  .middleware([adminMiddleware])
  .validator(projectSchema)
  .handler(async ({ context, data }) => {
    const { saveAdminProject: saveProject } = await import("@/lib/admin.server");
    await saveProject(context.userId, data);
    return { saved: true };
  });

export const setAdminProjectPublished = createServerFn({ method: "POST" })
  .middleware([adminMiddleware])
  .validator(
    z.object({
      project: projectSchema,
      isPublished: z.boolean(),
    }),
  )
  .handler(async ({ context, data }) => {
    const { setAdminProjectPublished: setPublished } = await import("@/lib/admin.server");
    await setPublished(context.userId, data.project, data.isPublished);
    return { saved: true };
  });

export const updateContactMessage = createServerFn({ method: "POST" })
  .middleware([adminMiddleware])
  .validator(messageStateSchema)
  .handler(async ({ context, data }) => {
    const { setContactMessageState } = await import("@/lib/admin.server");
    await setContactMessageState(context.userId, data.id, data.state);
    return { saved: true };
  });

export const submitContactMessage = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const { submitContactMessage: saveMessage } = await import("@/lib/admin.server");
    await saveMessage(data);
    return { sent: true };
  });
