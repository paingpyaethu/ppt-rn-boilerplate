import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "./types";
import { Paths } from "@/navigation/paths";
import { DetailsScreen, HomeScreen } from "@/screens";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Paths.Home} component={HomeScreen} />
    <Stack.Screen name={Paths.Details} component={DetailsScreen} />
  </Stack.Navigator>
);

export default HomeStack;
