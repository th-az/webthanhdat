import { getRequest } from "@tanstack/react-start/server";
import { dbSource } from "@/lib/db";
import { getRuntimeEnv } from "./runtime-env.server.ts";

export const LOCAL_ADMIN_USER_ID = "local-development-admin";

function isLoopbackHost(host: string) {
  try {
    const hostname = new URL(`http://${host}`).hostname.toLowerCase();
    return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]";
  } catch {
    return false;
  }
}

export function isLocalAdminBypassAllowed() {
  if (
    getRuntimeEnv("NODE_ENV") !== "development" ||
    !import.meta.env.DEV ||
    dbSource !== "pglite"
  ) {
    return false;
  }

  const host = getRequest()?.headers.get("host");
  return Boolean(host && isLoopbackHost(host));
}
