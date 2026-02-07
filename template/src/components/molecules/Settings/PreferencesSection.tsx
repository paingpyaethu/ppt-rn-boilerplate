import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@/theme";
import { Text, Card, IconByVariant } from "@/components/atoms";
import { useI18n } from "@/hooks";
import { useTranslation } from "react-i18next";
import { SupportedLanguages } from "@/hooks/language/schema";
import { rpx } from "@/utils/responsive";
import type { Variant } from "@/theme/types/config";

type PreferencesSectionProps = {
  isDark: boolean;
  themePreference: ThemePreference;
  onToggleTheme: () => void;
  onOpenLanguageSettings: () => void;
};

type ThemePreference = Variant | "system";

const PreferencesSection = ({
  isDark,
  themePreference,
  onToggleTheme,
  onOpenLanguageSettings,
}: PreferencesSectionProps) => {
  const { gutters, layout, colors, backgrounds, borders } = useTheme();
  const { t } = useTranslation();
  const { language } = useI18n();

  const themePreferenceLabel = useMemo(() => {
    if (themePreference === "system") {
      return t("common.settingsScreen.systemTheme");
    }
    if (themePreference === "dark") {
      return t("common.settingsScreen.darkTheme");
    }
    return t("common.settingsScreen.lightTheme");
  }, [t, themePreference]);

  const themePreferenceTag = useMemo(() => {
    if (themePreference === "system") {
      return t("common.settingsScreen.system");
    }
    if (themePreference === "dark") {
      return t("common.settingsScreen.dark");
    }
    return t("common.settingsScreen.light");
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
        {t("common.settingsScreen.preferences")}
      </Text>

      {/* Theme Toggle */}
      <Card
        variant="outlined"
        pressable
        onPress={onToggleTheme}
        style={[gutters.marginBottom_12]}
      >
        <View style={[layout.row, layout.itemsCenter, layout.justifyBetween]}>
          <View style={[layout.row, layout.itemsCenter, gutters.gap_12]}>
            <View
              style={[
                layout.justifyCenter,
                layout.itemsCenter,
                backgrounds.purple100,
                borders.rounded_8,
                { width: 40, height: 40 },
              ]}
            >
              <IconByVariant
                path="theme"
                stroke={colors.purple500}
                width={20}
                height={20}
              />
            </View>
            <View>
              <Text size="size_14" weight="medium">
                {t("common.settingsScreen.appearance")}
              </Text>
              <Text
                size="size_12"
                color="gray400"
                fontFamily={SupportedLanguages.EN_EN}
              >
                {themePreferenceLabel}
              </Text>
            </View>
          </View>
          <View
            style={[
              borders.rounded_16,
              gutters.paddingHorizontal_12,
              gutters.paddingVertical_6,
              isDark ? backgrounds.purple100 : backgrounds.gray50,
            ]}
          >
            <Text size="size_12" weight="medium" color="purple500">
              {themePreferenceTag}
            </Text>
          </View>
        </View>
      </Card>

      {/* Language Settings */}
      <Card
        variant="outlined"
        pressable
        onPress={onOpenLanguageSettings}
        style={[gutters.marginBottom_24]}
      >
        <View style={[layout.row, layout.itemsCenter, layout.justifyBetween]}>
          <View style={[layout.row, layout.itemsCenter, gutters.gap_12]}>
            <View
              style={[
                layout.justifyCenter,
                layout.itemsCenter,
                backgrounds.purple100,
                borders.rounded_8,
                { width: 40, height: 40 },
              ]}
            >
              <IconByVariant
                path="language"
                stroke={colors.purple500}
                width={20}
                height={20}
              />
            </View>
            <View>
              <Text size="size_14" weight="medium">
                {t("common.changeLanguage")}
              </Text>
              <Text size="size_12" color="gray400">
                {language === SupportedLanguages.EN_EN
                  ? t("common.EN")
                  : t("common.MM")}
              </Text>
            </View>
          </View>
          <IconByVariant
            path="chevron-right"
            stroke={colors.purple500}
            width={rpx(20)}
            height={rpx(20)}
          />
        </View>
      </Card>
    </>
  );
};

export default PreferencesSection;
