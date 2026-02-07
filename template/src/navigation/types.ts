import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "@/navigation/Stacks/AuthStack/types";
import { AppBottomTabParamList } from "@/navigation/Tabs/types";

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  BottomTabs: NavigatorScreenParams<AppBottomTabParamList>;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  Profile: undefined;
  TextComponentsDemo: undefined;
  ButtonComponentsDemo: undefined;
  CardComponentsDemo: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}
