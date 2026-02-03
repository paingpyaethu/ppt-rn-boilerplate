import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "@/navigation/Tabs/BottomTabNavigator";
import { AuthStack } from "@/navigation/Stacks";
import { ProfileScreen } from "@/screens";
import { useTheme } from "@/theme";
import { AppStackParamList } from "@/navigation/types";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  const { variant } = useTheme();

  return (
    <Stack.Navigator
      key={variant}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"BottomTabs"} component={BottomTabNavigator} />
      <Stack.Screen name={"AuthStack"} component={AuthStack} />
      <Stack.Screen name={"Profile"} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
