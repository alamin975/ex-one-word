// Describe Your Ex in One Word — one word that sums up an ex.
// The word is the whole verdict: a relationship that ran past its date.
import * as fs from "node:fs";

const entry = "Expired";

// Write the single word exactly as typed, UTF-8, no trailing newline.
function writeEntry(text: string): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);
