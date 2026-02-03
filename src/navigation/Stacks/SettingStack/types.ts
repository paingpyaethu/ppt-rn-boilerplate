import { Paths } from "@/navigation/paths";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// ***** Setting Stack Param List ***** //
export type SettingStackParamList = {
  [Paths.Settings]: undefined;
  [Paths.LanguageSettings]: undefined;
};

// ***** Setting Stack Screen Props ***** //
export type SettingStackScreenProps<T extends keyof SettingStackParamList> =
  NativeStackScreenProps<SettingStackParamList, T>;

// ***** Setting Screen Props ***** //
export type SettingsScreenProps = SettingStackScreenProps<"Settings">;
