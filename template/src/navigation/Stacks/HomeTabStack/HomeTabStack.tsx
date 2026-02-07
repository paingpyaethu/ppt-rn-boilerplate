import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "./types";
import { DetailsScreen, HomeScreen } from "@/screens";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={"Home"} component={HomeScreen} />
    <Stack.Screen name={"Details"} component={DetailsScreen} />
  </Stack.Navigator>
);

export default HomeStack;
