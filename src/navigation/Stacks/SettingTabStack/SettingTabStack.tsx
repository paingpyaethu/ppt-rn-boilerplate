import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingStackParamList } from "@/navigation/Stacks/SettingTabStack/types";
import { SettingScreen } from "@/screens";
import LanguageSettingsSheet from "@/screens/LanguageSettingsSheet/LanguageSettingsSheet";
import { rpx } from "@/utils/responsive";

const Stack = createNativeStackNavigator<SettingStackParamList>();

const SettingTabStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={"Settings"} component={SettingScreen} />
    <Stack.Screen
      name={"LanguageSettings"}
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

export default SettingTabStack;
