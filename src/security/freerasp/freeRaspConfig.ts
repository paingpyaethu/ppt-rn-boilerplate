import { IS_PROD } from "@/utils/common";
import { TalsecConfig } from "freerasp-react-native";
import Config from "react-native-config";

/**
 * freeRASP config values should be provided via env.
 * Required env:
 * - FREERASP_WATCHER_MAIL
 * - FREERASP_ANDROID_PACKAGE_NAME
 * - FREERASP_ANDROID_CERT_HASHES (comma-separated Base64 hashes)
 * - FREERASP_IOS_BUNDLE_ID
 * - FREERASP_IOS_TEAM_ID
 */
const parseCsv = (v: string | undefined) =>
  (v ?? "")
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

export const freeRaspConfig: TalsecConfig = {
  androidConfig: {
    packageName: Config.FREERASP_ANDROID_PACKAGE_NAME ?? "",
    certificateHashes: parseCsv(Config.FREERASP_ANDROID_CERT_HASHES),
    supportedAlternativeStores: parseCsv(Config.FREERASP_ANDROID_ALT_STORES),
  },
  iosConfig: {
    appBundleId: Config.FREERASP_IOS_BUNDLE_ID ?? "",
    appTeamId: Config.FREERASP_IOS_TEAM_ID ?? "",
  },
  watcherMail: Config.FREERASP_WATCHER_MAIL ?? "",
  isProd: IS_PROD,
} as const;
