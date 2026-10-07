import type { D1DatabaseBinding } from "./runtime-env.types";

export function getRuntimeEnv(key: string): string | undefined {
  return process.env[key];
}

export function getD1Database(): D1DatabaseBinding | undefined {
  return undefined;
}
