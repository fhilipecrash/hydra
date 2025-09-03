import { logger } from "@main/services";
import fs from "node:fs";
import { registerEvent } from "../register-event";

const readDirectory = async (
  _event: Electron.IpcMainInvokeEvent,
  directoryPath: string
) => {
  try {
    const files = await fs.promises.readdir(directoryPath);
    return files;
  } catch (err) {
    logger.error("Failed to read directory", err);
    return null;
  }
};

registerEvent("readDirectory", readDirectory);
