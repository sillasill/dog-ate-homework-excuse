import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "I checked your answers first, and they were wrong on every page, so I ate the proof before the teacher could see it, and honestly I did you a favour, human.";

mkdirSync("/output", { recursive: true });
if (TEXT.length < 1 || TEXT.length > 200 || TEXT.trim().length === 0) {
  throw new Error("entry must be 1 to 200 characters");
}
writeFileSync("/output/entry.txt", TEXT, "utf8");
