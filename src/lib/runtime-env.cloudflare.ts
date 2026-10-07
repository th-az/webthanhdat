import { env } from "cloudflare:workers";
import type { D1DatabaseBinding } from "./runtime-env.types";

type CloudflareBindings = Record<string, unknown> & {
  DB?: D1DatabaseBinding;
};

const bindings = env as CloudflareBindings;

export function getRuntimeEnv(key: string): string | undefined {
  const value = bindings[key];
  return typeof value === "string" ? value : undefined;
}

export function getD1Database(): D1DatabaseBinding | undefined {
  if (!bindings.DB) {
    throw new Error("Cloudflare Worker is missing its required D1 binding named DB.");
  }
  return bindings.DB;
}
