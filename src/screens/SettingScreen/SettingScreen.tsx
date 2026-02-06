import React, { useCallback } from "react";
import { View } from "react-native";
import { Screen } from "@/components/template";
import { SettingsScreenProps } from "@/navigation/Stacks/SettingTabStack/types";
import { useTheme } from "@/theme";
import {
  Heading,
  Caption,
  Text,
  Card,
  IconByVariant,
  Button,
} from "@/components/atoms";
import { useI18n } from "@/hooks";
import { useTranslation } from "react-i18next";
import { Variant } from "@/theme/_config";
import { SupportedLanguages } from "@/hooks/language/schema";
import { rpx } from "@/utils/responsive";

const SettingScreen = ({ navigation }: SettingsScreenProps) => {
  const {
    gutters,
    layout,
    colors,
    backgrounds,
    borders,
    variant,
    changeTheme,
  } = useTheme();
  const { t } = useTranslation();
  const { language } = useI18n();

  const isDark = variant === "dark";

  const toggleTheme = useCallback(() => {
    changeTheme(isDark ? ("default" as const) : Variant.DARK);
  }, [isDark, changeTheme]);

  const openLanguageSettings = useCallback(() => {
    navigation.navigate("LanguageSettings");
  }, [navigation]);

  return (
    <Screen
      preset="scroll"
      safeAreaEdges={["top"]}
      contentContainerStyle={[gutters.padding_16]}
    >
      {/* Header */}
      <Heading level={1} align="center" style={[gutters.marginBottom_6]}>
        {t("bottomtabs.settings")}
      </Heading>
      <Caption size="medium" align="center" style={[gutters.marginBottom_24]}>
        Manage your preferences
      </Caption>

      {/* Profile Card */}
      <Card variant="elevated" style={[gutters.marginBottom_24]}>
        <View style={[layout.row, layout.itemsCenter, gutters.gap_16]}>
          <View
            style={[
              layout.justifyCenter,
              layout.itemsCenter,
              backgrounds.purple100,
              borders.rounded_16,
              { width: 56, height: 56 },
            ]}
          >
            <IconByVariant
              path="fire"
              stroke={colors.purple500}
              width={28}
              height={28}
            />
          </View>
          <View style={[layout.flex_1]}>
            <Text size="size_18" weight="semiBold">
              RN Boilerplate
            </Text>
            <Text size="size_12" color="gray400" style={[gutters.marginTop_4]}>
              {isDark ? "Dark" : "Light"} mode ·{" "}
              {language === SupportedLanguages.EN_EN
                ? t("common.EN")
                : t("common.MM")}
            </Text>
          </View>
        </View>
      </Card>

      {/* Preferences Section */}
      <Text
        size="size_12"
        weight="semiBold"
        color="gray400"
        transform="uppercase"
        style={[gutters.marginBottom_10, gutters.marginLeft_4]}
      >
        Preferences
      </Text>

      {/* Theme Toggle */}
      <Card
        variant="outlined"
        pressable
        onPress={toggleTheme}
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
                Appearance
              </Text>
              <Text size="size_12" color="gray400">
                {isDark ? "Dark" : "Light"} theme
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
              {isDark ? "Dark" : "Light"}
            </Text>
          </View>
        </View>
      </Card>

      {/* Language Settings */}
      <Card
        variant="outlined"
        pressable
        onPress={openLanguageSettings}
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

      {/* About Section */}
      <Text
        size="size_12"
        weight="semiBold"
        color="gray400"
        transform="uppercase"
        style={[gutters.marginBottom_10, gutters.marginLeft_4]}
      >
        About
      </Text>

      <Card variant="filled" style={[gutters.marginBottom_24]}>
        <View style={[gutters.gap_12]}>
          <View style={[layout.row, layout.justifyBetween, layout.itemsCenter]}>
            <Text size="size_14" color="gray400">
              Version
            </Text>
            <Text size="size_14" weight="medium">
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
            <Text size="size_14" color="gray400">
              React Native
            </Text>
            <Text size="size_14" weight="medium">
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
              Theme
            </Text>
            <Text size="size_14" weight="medium">
              {isDark ? "Dark" : "Default"}
            </Text>
          </View>
        </View>
      </Card>

      {/* Reset / Action Button */}
      <Button
        variant="outline"
        size="large"
        fullWidth
        onPress={toggleTheme}
        leftIcon={
          <IconByVariant
            path="theme"
            stroke={colors.purple500}
            width={18}
            height={18}
          />
        }
      >
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </Button>
    </Screen>
  );
};

export default SettingScreen;
