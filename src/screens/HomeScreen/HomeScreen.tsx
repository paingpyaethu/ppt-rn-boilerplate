import React from "react";
import Config from "react-native-config";
import { Screen } from "@/components/template";
import { ThemedText } from "@/components/atoms";
import { $styles } from "@/theme/styles";

const HomeScreen = () => {
  return (
    <Screen preset="scroll" contentContainerStyle={$styles.container}>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>

      <ThemedText>{Config.APP_ENV ?? "no"}</ThemedText>
    </Screen>
  );
};

export default HomeScreen;
