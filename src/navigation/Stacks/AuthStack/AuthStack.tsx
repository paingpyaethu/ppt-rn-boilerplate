import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@/screens";
import { AuthStackParamList } from "./types";
import { Paths } from "@/navigation/paths";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Paths.Login} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
