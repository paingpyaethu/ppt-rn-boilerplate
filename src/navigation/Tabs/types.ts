import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { AppStackScreenProps, AppStackParamList } from "@/navigation/Stacks/AppStack/types";
import { HomeStackParamList } from "@/navigation/Stacks/HomeStack/types";
import { SettingStackParamList } from "@/navigation/Stacks/SettingStack/types";
import { Paths } from "@/navigation/paths";

export type AppBottomTabParamList = {
  [Paths.HomeTabStack]: NavigatorScreenParams<HomeStackParamList>;
  [Paths.SettingTabStack]: NavigatorScreenParams<SettingStackParamList>;
};

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppButtonTabScreenProps<T extends keyof AppBottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppBottomTabParamList, T>,
    AppStackScreenProps<keyof AppStackParamList>
  >;
