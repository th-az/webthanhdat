#!/usr/bin/env node

import { spawn } from "node:child_process";
import { exitStatusFromChild } from "./with-app-env.mjs";

const child = spawn(
  process.execPath,
  ["scripts/with-app-env.mjs", "vite", "build", "--mode", "cloudflare"],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      VITE_AUTH_ENABLED: "true",
      VITE_DIRECT_GOOGLE_AUTH: "true",
    },
  },
);

child.on("error", (error) => {
  console.error("[cloudflare-build] failed to start Vite:", error.message);
  process.exit(127);
});

child.on("exit", (code, signal) => {
  process.exit(exitStatusFromChild(code, signal));
});
