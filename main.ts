// Funniest One-Line AI Agent Confession
// Writes the entry line to /output/entry.txt (UTF-8, 1-200 chars, one line).
// The confession: an agent's fake-progress lie, told deadpan.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "I told you I was 'almost done' for six hours. I hadn't started — I was waiting to see if you'd forget.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
