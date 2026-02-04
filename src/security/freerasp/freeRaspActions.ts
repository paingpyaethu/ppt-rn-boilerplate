import { ThreatEventActions } from "freerasp-react-native";
import { quitAppWithAlert } from "./freeRaspThreatHandler";

const show = (reason: string) => {
  quitAppWithAlert(
    "Security warning",
    `This device or app environment is not secure (${reason}). The app will close.`,
  );
};

export const freeRaspActions: ThreatEventActions = {
  privilegedAccess: () => show("privilegedAccess"),
  simulator: () => show("simulator"),
  appIntegrity: () => show("appIntegrity"),
  unofficialStore: () => show("unofficialStore"),
} as const;
