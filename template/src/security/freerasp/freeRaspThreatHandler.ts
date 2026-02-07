import { Alert } from "react-native";
import { exitApp } from "@/native/ExitApp";
let didShow = false;

/**
 * Show a single alert and then quit the app after user confirms.
 * @param title Alert title
 * @param message Alert message
 */
export const quitAppWithAlert = (title: string, message: string) => {
  if (didShow) return;
  didShow = true;

  Alert.alert(title, message, [
    {
      text: "OK",
      onPress: () => {
        exitApp();
      },
    },
  ]);
};
