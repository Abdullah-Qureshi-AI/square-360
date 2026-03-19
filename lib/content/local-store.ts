import "server-only";

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { defaultTravelContentStore } from "@/lib/content/defaults";
import type { TravelContentStore } from "@/lib/content/types";

const DATA_DIRECTORY = path.join(process.cwd(), "data");
const DATA_FILE_PATH = path.join(DATA_DIRECTORY, "travel-content.json");

function cloneDefaults(): TravelContentStore {
  return JSON.parse(JSON.stringify(defaultTravelContentStore)) as TravelContentStore;
}

export async function readTravelContentStore(): Promise<TravelContentStore> {
  try {
    const raw = await readFile(DATA_FILE_PATH, "utf8");
    return JSON.parse(raw) as TravelContentStore;
  } catch {
    const fallback = cloneDefaults();
    await writeTravelContentStore(fallback);
    return fallback;
  }
}

export async function writeTravelContentStore(store: TravelContentStore): Promise<void> {
  await mkdir(DATA_DIRECTORY, { recursive: true });
  await writeFile(DATA_FILE_PATH, JSON.stringify(store, null, 2), "utf8");
}

export { DATA_FILE_PATH };
