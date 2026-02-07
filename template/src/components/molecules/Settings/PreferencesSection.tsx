import React, { useMemo } from "react";
import { Pressable, View } from "react-native";
import { useTheme } from "@/theme";
import { Text, Card, IconByVariant } from "@/components/atoms";
import { useI18n } from "@/hooks";
import { useTranslation } from "react-i18next";
import { SupportedLanguages } from "@/hooks/language/schema";
import { rpx } from "@/utils/responsive";
import type { Variant } from "@/theme/types/config";

type PreferencesSectionProps = {
  themePreference: ThemePreference;
  onSelectTheme: (preference: ThemePreference) => void;
  onOpenLanguageSettings: () => void;
};

type ThemePreference = Variant | "system";

const PreferencesSection = ({
  themePreference,
  onSelectTheme,
  onOpenLanguageSettings,
}: PreferencesSectionProps) => {
  const { components, gutters, layout, colors, backgrounds, borders } =
    useTheme();
  const { t } = useTranslation();
  const { language } = useI18n();

  const themeOptions = useMemo(
    () => [
      {
        value: "system" as const,
        label: t("common.settingsScreen.systemTheme"),
      },
      {
        value: "default" as const,
        label: t("common.settingsScreen.lightTheme"),
      },
      {
        value: "dark" as const,
        label: t("common.settingsScreen.darkTheme"),
      },
    ],
    [t],
  );

  const themePreferenceLabel = useMemo(() => {
    if (themePreference === "system") {
      return t("common.settingsScreen.systemTheme");
    }
    if (themePreference === "dark") {
      return t("common.settingsScreen.darkTheme");
    }
    return t("common.settingsScreen.lightTheme");
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
      <Card variant="outlined" style={[gutters.marginBottom_12]}>
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
          accessibilityRole="radiogroup"
          style={[gutters.marginTop_12, gutters.gap_12]}
        >
          {themeOptions.map((option) => {
            const isSelected = themePreference === option.value;
            return (
              <Pressable
                key={option.value}
                onPress={() => onSelectTheme(option.value)}
                style={[
                  components.radioItemContainer({
                    isSelected,
                    isDisabled: false,
                  }),
                ]}
                testID={`theme-option-${option.value}`}
                accessibilityRole="radio"
                accessibilityState={{ selected: isSelected, disabled: false }}
                accessibilityLabel={option.label}
              >
                <View
                  style={[
                    components.radioOuterCircle({
                      isSelected,
                      isDisabled: false,
                    }),
                  ]}
                >
                  {isSelected && (
                    <View
                      style={[components.radioInnerCircle({ isSelected })]}
                    />
                  )}
                </View>

                <View style={[{ flex: 1 }]}>
                  <Text
                    size="size_16"
                    weight={isSelected ? "semiBold" : "medium"}
                    color={isSelected ? "purple500" : "gray800"}
                  >
                    {option.label}
                  </Text>
                </View>
              </Pressable>
            );
          })}
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
