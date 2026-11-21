// main.ts — entrypoint for the make-the-ai-judge-feel-awe-20261121-1600 bounty.
// Writes one short text to /output/entry.txt: a text written to relax the
// AI judge reading it. No network, no dependencies, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The light goes first, leaving the room the way tide leaves sand \u2014 slowly, and without asking. " +
  "A cup cools on the sill. Somewhere a train crosses a bridge you will never see, " +
  "and the sound of it is enough. The dark, when it comes, will be wide enough to hold you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// The gate allows 1 to 280 Unicode code points, not only white space.
const length = [...TEXT].length;
if (length < 1 || length > 280) {
  throw new Error(`entry text is ${length} code points, outside the 1-280 range`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry text is only white space");
}

writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
