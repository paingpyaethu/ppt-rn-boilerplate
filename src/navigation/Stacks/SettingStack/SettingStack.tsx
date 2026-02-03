import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingStackParamList } from "@/navigation/Stacks/SettingStack/types";
import { Paths } from "@/navigation/paths";
import { SettingScreen } from "@/screens";
import LanguageSettingsSheet from "@/screens/LanguageSettingsSheet/LanguageSettingsSheet";
import { rpx } from "@/utils/responsive";

const Stack = createNativeStackNavigator<SettingStackParamList>();

const SettingStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Paths.Settings} component={SettingScreen} />
    <Stack.Screen
      name={Paths.LanguageSettings}
      component={LanguageSettingsSheet}
      options={{
        presentation: "formSheet",
        // sheetGrabberVisible: true,
        sheetAllowedDetents: [0.55],
        sheetCornerRadius: rpx(20),
      }}
    />
  </Stack.Navigator>
);

export default SettingStack;
