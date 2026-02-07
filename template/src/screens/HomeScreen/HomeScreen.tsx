import React from "react";
import { useTheme } from "@/theme";
import { Button, Heading, Caption } from "@/components/atoms";
import { useTranslation } from "react-i18next";
import { Screen } from "@/components/template";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle";
import { SupportedLanguages } from "@/hooks/language/schema";

const HomeScreen = () => {
  const { t } = useTranslation();
  const { gutters } = useTheme();
  const top = useSafeAreaInsetsStyle(["top"], "padding");

  const navigation = useNavigation();

  return (
    <Screen preset="scroll" contentContainerStyle={[gutters.padding_16]}>
      <View style={[top]} />

      <Heading level={1} align="center" style={[gutters.marginBottom_16]}>
        {t("bottomtabs.home")}
      </Heading>

      <Caption
        size="medium"
        align="center"
        fontFamily={SupportedLanguages.EN_EN}
        style={[gutters.marginBottom_24]}
      >
        Welcome to your React Native Boilerplate
      </Caption>

      <Button
        variant="primary"
        fontFamily={SupportedLanguages.EN_EN}
        onPress={() => navigation.navigate("TextComponentsDemo")}
      >
        Go To Text Components Demo
      </Button>

      <View style={[gutters.marginBottom_16]} />

      <Button
        variant="secondary"
        fontFamily={SupportedLanguages.EN_EN}
        onPress={() => navigation.navigate("ButtonComponentsDemo")}
      >
        Go To Button Components Demo
      </Button>

      <View style={[gutters.marginBottom_16]} />

      <Button
        variant="outline"
        fontFamily={SupportedLanguages.EN_EN}
        onPress={() => navigation.navigate("CardComponentsDemo")}
      >
        Go To Card Components Demo
      </Button>
    </Screen>
  );
};

export default HomeScreen;