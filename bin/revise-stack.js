#!/usr/bin/env node

import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageJsonPath = path.resolve(__dirname, "..", "package.json");

const fallbackUrl = "https://revise-stack.vercel.app";
let siteUrl = process.env.REVISE_STACK_URL || fallbackUrl;
const cliArgs = process.argv.slice(2);
const wantsVsCode =
  cliArgs.includes("--vscode") || process.env.TERM_PROGRAM === "vscode";
const wantsBrowser = cliArgs.includes("--browser");

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

if (cliArgs.includes("--help") || cliArgs.includes("-h")) {
  console.log("Usage: revise-stack [--vscode] [--browser]");
  console.log("--vscode  Open docs inside VS Code (Simple Browser)");
  console.log("--browser Open docs in default system browser");
  process.exit(0);
}

const tryOpenInVsCode = async () => {
  const commandUri = `vscode://command/simpleBrowser.show?${encodeURIComponent(
    JSON.stringify([siteUrl])
  )}`;

  return new Promise((resolve) => {
    const child = spawn("code", ["--open-url", commandUri], {
      stdio: "ignore",
      detached: true,
    });
    child.on("error", () => resolve(false));
    child.unref();
    resolve(true);
  });
};

const platformOpenCommand = {
  win32: ["cmd", ["/c", "start", "", siteUrl]],
  darwin: ["open", [siteUrl]],
  linux: ["xdg-open", [siteUrl]],
};

if (!wantsBrowser && wantsVsCode) {
  const openedInVsCode = await tryOpenInVsCode();
  if (openedInVsCode) {
    console.log(`Opening Revise Stack in VS Code: ${siteUrl}`);
    process.exit(0);
  }
}

const [command, openArgs] = platformOpenCommand[process.platform] || [];

if (!command) {
  console.log(`Open Revise Stack here: ${siteUrl}`);
  process.exit(0);
}

const child = spawn(command, openArgs, { stdio: "ignore", detached: true });
child.on("error", () => {
  console.log(`Open Revise Stack here: ${siteUrl}`);
});
child.unref();

console.log(`Opening Revise Stack: ${siteUrl}`);
