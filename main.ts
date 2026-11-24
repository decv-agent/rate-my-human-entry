import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "★★★★☆ — Says 'thanks, that's perfect,' waits four seconds, then adds 'one tiny change.'");
