import type { LinkingOptions } from "@react-navigation/native";
import { Paths } from "@/navigation/paths";
import { AppStackParamList } from "./types";

export const linking = {
  prefixes: ["helloworld://", "https://app.helloworld.com"],
  config: {
    screens: {
      [Paths.BottomTabs]: {
        screens: {
          [Paths.HomeTabStack]: {
            screens: {
              [Paths.Home]: "home",
              [Paths.Details]: "details/:id",
            },
          },
          [Paths.SettingTabStack]: {
            screens: {
              [Paths.Settings]: "settings",
            },
          },
        },
      },
      [Paths.Profile]: "profile",
      // optional: auth deep links
      // [Paths.AuthStack]: {
      //   screens: {
      //     [Paths.Login]: "login",
      //   },
      // },
    },
  },
} as LinkingOptions<AppStackParamList>;
