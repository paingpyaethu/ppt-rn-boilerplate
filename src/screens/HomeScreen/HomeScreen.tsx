import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@/theme";
import { IconByVariant } from "@/components/atoms";
import { useI18n } from "@/hooks";
import { useTranslation } from "react-i18next";

const HomeScreen = () => {
  const { t } = useTranslation();
  const { components, colors, gutters, fonts } = useTheme();
  const { toggleLanguage } = useI18n();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={toggleLanguage}
        style={[components.buttonCircle, gutters.marginBottom_16]}
        testID="change-language-button"
      >
        <IconByVariant path="language" stroke={colors.purple500} />
      </TouchableOpacity>

      <Text style={[fonts.fontMedium]}>{t("bottomtabs.settings")}</Text>
      <Text style={{ fontFamily: "Pyidaungsu" }}>
        {t("bottomtabs.settings")}
      </Text>
    </View>
  );
};

export default HomeScreen;
