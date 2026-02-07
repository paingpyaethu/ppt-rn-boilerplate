import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {
  AppStackScreenProps,
  AppStackParamList,
} from "@/navigation/Stacks/AppStack/types";
import { HomeStackParamList } from "@/navigation/Stacks/HomeTabStack/types";
import { SettingStackParamList } from "@/navigation/Stacks/SettingTabStack/types";

export type AppBottomTabParamList = {
  HomeTabStack: NavigatorScreenParams<HomeStackParamList>;
  SettingTabStack: NavigatorScreenParams<SettingStackParamList>;
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
