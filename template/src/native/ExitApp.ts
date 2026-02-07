import { NativeModules } from "react-native";

type RNExitAppModule = {
  exitApp: () => void;
};

const moduleName = "RNExitApp";

export const ExitApp: RNExitAppModule = NativeModules[
  moduleName
] as RNExitAppModule;

export const exitApp = () => {
  if (!ExitApp?.exitApp) {
    console.warn(`[ExitApp] Native module ${moduleName} is not linked`);
    return;
  }
  ExitApp.exitApp();
};
