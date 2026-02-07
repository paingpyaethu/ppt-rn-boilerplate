import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@/theme";
import { Text, Card, IconByVariant, Button } from "@/components/atoms";
import { useTranslation } from "react-i18next";
import { SupportedLanguages } from "@/hooks/language/schema";
import type { Variant } from "@/theme/types/config";

type AboutSectionProps = {
  themePreference: ThemePreference;
  onToggleTheme: () => void;
};

type ThemePreference = Variant | "system";

const AboutSection = ({ themePreference, onToggleTheme }: AboutSectionProps) => {
  const { gutters, layout, colors, borders } = useTheme();
  const { t } = useTranslation();

  const themePreferenceLabel = useMemo(() => {
    if (themePreference === "system") {
      return t("common.settingsScreen.system");
    }
    if (themePreference === "dark") {
      return t("common.settingsScreen.dark");
    }
    return t("common.settingsScreen.light");
  }, [t, themePreference]);

  const nextThemeLabel = useMemo(() => {
    if (themePreference === "default") {
      return t("common.settingsScreen.switchToDark");
    }
    if (themePreference === "dark") {
      return t("common.settingsScreen.switchToSystem");
    }
    return t("common.settingsScreen.switchToLight");
  }, [t, themePreference]);

  return (
    <>
      <Text
        size="size_12"
        weight="semiBold"
        color="gray400"
        transform="uppercase"
        style={[gutters.marginBottom_10, gutters.marginLeft_4]}
      >
        {t("common.settingsScreen.about")}
      </Text>

      <Card variant="filled" style={[gutters.marginBottom_24]}>
        <View style={[gutters.gap_12]}>
          <View style={[layout.row, layout.justifyBetween, layout.itemsCenter]}>
            <Text size="size_14" color="gray400">
              {t("common.settingsScreen.version")}
            </Text>
            <Text
              size="size_14"
              weight="medium"
              fontFamily={SupportedLanguages.EN_EN}
            >
              1.0.0
            </Text>
          </View>
          <View
            style={[
              borders.wTop_1,
              borders.gray100,
              gutters.paddingTop_12,
              layout.row,
              layout.justifyBetween,
              layout.itemsCenter,
            ]}
          >
            <Text
              size="size_14"
              color="gray400"
              fontFamily={SupportedLanguages.EN_EN}
            >
              React Native
            </Text>
            <Text
              size="size_14"
              weight="medium"
              fontFamily={SupportedLanguages.EN_EN}
            >
              0.83
            </Text>
          </View>
          <View
            style={[
              borders.wTop_1,
              borders.gray100,
              gutters.paddingTop_12,
              layout.row,
              layout.justifyBetween,
              layout.itemsCenter,
            ]}
          >
            <Text size="size_14" color="gray400">
              {t("common.settingsScreen.theme")}
            </Text>
            <Text size="size_14" weight="medium">
              {themePreferenceLabel}
            </Text>
          </View>
        </View>
      </Card>

      {/* Reset / Action Button */}
      <Button
        variant="outline"
        size="large"
        fullWidth
        onPress={onToggleTheme}
        leftIcon={
          <IconByVariant
            path="theme"
            stroke={colors.purple500}
            width={18}
            height={18}
          />
        }
      >
        {nextThemeLabel}
      </Button>
    </>
  );
};

export default AboutSection;
