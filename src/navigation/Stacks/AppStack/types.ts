import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppBottomTabParamList } from "@/navigation/Tabs/types";
import { AuthStackParamList } from "../AuthStack/types";

export type AppStackParamList = {
  Onboarding: undefined;
  BottomTabs: NavigatorScreenParams<AppBottomTabParamList>;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;
