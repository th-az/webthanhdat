import { getRequest } from "@tanstack/react-start/server";
import { dbSource } from "@/lib/db";

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
  if (process.env.NODE_ENV !== "development" || !import.meta.env.DEV || dbSource !== "pglite") {
    return false;
  }

  const host = getRequest()?.headers.get("host");
  return Boolean(host && isLoopbackHost(host));
}
