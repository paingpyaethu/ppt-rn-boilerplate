import { View, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@/theme";
import { IconByVariant, Text, Heading, Caption } from "@/components/atoms";
import { useI18n } from "@/hooks";
import { useTranslation } from "react-i18next";
import TextComponentsDemo from "../TextComponentsDemo/TextComponentsDemo";

const HomeScreen = () => {
  const { t } = useTranslation();
  const { components, colors, gutters } = useTheme();
  const { toggleLanguage } = useI18n();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Heading level={1} align="center" style={[gutters.marginBottom_16]}>
        {t("bottomtabs.home")}
      </Heading>

      <Caption size="medium" align="center" style={[gutters.marginBottom_32]}>
        Welcome to your React Native Boilerplate
      </Caption>

      <TouchableOpacity
        onPress={toggleLanguage}
        style={[components.buttonCircle, gutters.marginBottom_16]}
        testID="change-language-button"
      >
        <IconByVariant path="language" stroke={colors.purple500} />
      </TouchableOpacity>

      <Text size="size_16" weight="medium" align="center">
        {t("bottomtabs.settings")}
      </Text>

      <TextComponentsDemo />
    </View>
  );
};

export default HomeScreen;
