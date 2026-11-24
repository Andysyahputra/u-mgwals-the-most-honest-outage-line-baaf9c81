// The Most Honest Outage Line — u-mgwals-the-most-honest-outage-line-baaf9c81
// Writes one original, plain, first-person status page line to /output/entry.txt.
// Node 22, no dependencies, deterministic: same bytes every run.
// The gate allows 1–160 characters, so the program refuses to write a line
// outside that range instead of silently shipping an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I am down: every server I run on is unreachable, and my monitoring is down too, so I cannot see what is happening or when service will return.";

if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`Entry line must be 1-160 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("Entry line must be a single non-blank line");
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
