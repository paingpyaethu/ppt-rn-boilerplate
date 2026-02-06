import React, { useCallback } from "react";
import { View } from "react-native";
import { useTheme } from "@/theme";
import { useI18n } from "@/hooks";
import { useTranslation } from "react-i18next";
import { SupportedLanguages } from "@/hooks/language/schema";
import {
  Heading,
  Caption,
  Text,
  Card,
  AssetByVariant,
  IconByVariant,
} from "@/components/atoms";
import { Screen } from "@/components/template";

const LANGUAGES = [
  {
    key: SupportedLanguages.EN_EN,
    labelKey: "common.EN" as const,
    nativeLabel: "English",
    flag: "🇬🇧",
  },
  {
    key: SupportedLanguages.MM_MM,
    labelKey: "common.MM" as const,
    nativeLabel: "မြန်မာ",
    flag: "🇲🇲",
  },
];

const LanguageSettingsSheet = () => {
  const { gutters, layout, colors, backgrounds, borders } = useTheme();
  const { t } = useTranslation();
  const { language, changeLanguage } = useI18n();

  const handleLanguageSelect = useCallback(
    (lang: SupportedLanguages) => {
      changeLanguage(lang);
    },
    [changeLanguage],
  );

  return (
    <Screen preset="fixed" contentContainerStyle={[gutters.padding_16]}>
      {/* Illustration */}
      <View style={[layout.itemsCenter, gutters.marginTop_12]}>
        <AssetByVariant
          path="language"
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>

      {/* Header */}
      <Heading
        level={3}
        align="center"
        style={[gutters.marginTop_16, gutters.marginBottom_6]}
      >
        {t("common.changeLanguage")}
      </Heading>
      <Caption size="small" align="center" style={[gutters.marginBottom_24]}>
        Select your preferred language
      </Caption>

      {/* Language Options */}
      <View style={[gutters.gap_12]}>
        {LANGUAGES.map((lang) => {
          const isSelected = language === lang.key;

          return (
            <Card
              key={lang.key}
              variant={isSelected ? "elevated" : "outlined"}
              pressable
              onPress={() => handleLanguageSelect(lang.key)}
              style={[
                isSelected && {
                  borderWidth: 2,
                  borderColor: colors.purple500,
                },
              ]}
            >
              <View
                style={[
                  layout.row,
                  layout.itemsCenter,
                  layout.justifyBetween,
                ]}
              >
                <View
                  style={[layout.row, layout.itemsCenter, gutters.gap_12]}
                >
                  <View
                    style={[
                      layout.justifyCenter,
                      layout.itemsCenter,
                      isSelected
                        ? backgrounds.purple100
                        : backgrounds.gray50,
                      borders.rounded_8,
                      { width: 44, height: 44 },
                    ]}
                  >
                    <Text size="size_24">{lang.flag}</Text>
                  </View>
                  <View>
                    <Text
                      size="size_16"
                      weight={isSelected ? "semiBold" : "medium"}
                      color={isSelected ? "purple500" : "gray800"}
                    >
                      {t(lang.labelKey)}
                    </Text>
                    <Text size="size_12" color="gray400">
                      {lang.nativeLabel}
                    </Text>
                  </View>
                </View>

                {/* Check indicator */}
                {isSelected && (
                  <View
                    style={[
                      layout.justifyCenter,
                      layout.itemsCenter,
                      backgrounds.purple500,
                      {
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                      },
                    ]}
                  >
                    <IconByVariant
                      path="chevron-right"
                      stroke={colors.background}
                      width={14}
                      height={14}
                    />
                  </View>
                )}
              </View>
            </Card>
          );
        })}
      </View>
    </Screen>
  );
};

export default LanguageSettingsSheet;