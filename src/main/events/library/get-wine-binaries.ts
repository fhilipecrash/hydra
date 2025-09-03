import { logger, SystemPath } from "@main/services";
import fs from "node:fs";
import path from "node:path";
import { registerEvent } from "../register-event";

const getWineBinaries = async (_event: Electron.IpcMainInvokeEvent) => {
  try {
    const steamProtonDirectories = path.join(
      SystemPath.getPath("home"),
      ".steam",
      "debian-installation",
      "compatibilitytools.d"
    );

    return await fs.promises.realpath(steamProtonDirectories);
  } catch (err) {
    logger.error("Failed to get wine binaries path", err);

    return null;
  }
};

registerEvent("getWineBinaries", getWineBinaries);
