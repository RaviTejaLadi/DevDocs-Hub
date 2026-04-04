#!/usr/bin/env node

import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageJsonPath = path.resolve(__dirname, "..", "package.json");

const fallbackUrl = "https://revise-stack.vercel.app";
let siteUrl = process.env.REVISE_STACK_URL || fallbackUrl;

if (existsSync(packageJsonPath)) {
  try {
    const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
    if (packageJson?.homepage && typeof packageJson.homepage === "string") {
      siteUrl = packageJson.homepage;
    }
  } catch {
    // Keep fallback URL if package.json is unreadable.
  }
}

const platformOpenCommand = {
  win32: ["cmd", ["/c", "start", "", siteUrl]],
  darwin: ["open", [siteUrl]],
  linux: ["xdg-open", [siteUrl]],
};

const [command, args] = platformOpenCommand[process.platform] || [];

if (!command) {
  console.log(`Open Revise Stack here: ${siteUrl}`);
  process.exit(0);
}

const child = spawn(command, args, { stdio: "ignore", detached: true });
child.on("error", () => {
  console.log(`Open Revise Stack here: ${siteUrl}`);
});
child.unref();

console.log(`Opening Revise Stack: ${siteUrl}`);
