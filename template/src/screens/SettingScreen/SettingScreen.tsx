import React, { useCallback } from "react";
import { View } from "react-native";
import { SettingsScreenProps } from "@/navigation/Stacks/SettingTabStack/types";
import { useTheme } from "@/theme";
import { Heading, Caption } from "@/components/atoms";
import { AboutSection, PreferencesSection, ProfileCard } from "@/components/molecules";
import { Screen } from "@/components/template";
import { useTranslation } from "react-i18next";
import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle";
import type { Variant } from "@/theme/types/config";

type ThemePreference = Variant | "system";

const SettingScreen = ({ navigation }: SettingsScreenProps) => {
  const { gutters, variant, changeTheme, themePreference } = useTheme();
  const { t } = useTranslation();
  const top = useSafeAreaInsetsStyle(["top"], "padding");

  const isDark = variant === "dark";

  const selectTheme = useCallback(
    (preference: ThemePreference) => {
      changeTheme(preference);
    },
    [changeTheme],
  );

  const openLanguageSettings = useCallback(() => {
    navigation.navigate("LanguageSettings");
  }, [navigation]);

  return (
    <Screen preset="scroll" contentContainerStyle={[gutters.padding_16]}>
      <View style={[top]} />
      {/* Header */}
      <Heading level={1} align="center" style={[gutters.marginBottom_6]}>
        {t("bottomtabs.settings")}
      </Heading>
      <Caption size="medium" align="center" style={[gutters.marginBottom_24]}>
        {t("common.settingsScreen.subtitle")}
      </Caption>

      <ProfileCard isDark={isDark} />

      <PreferencesSection
        themePreference={themePreference}
        onSelectTheme={selectTheme}
        onOpenLanguageSettings={openLanguageSettings}
      />

      <AboutSection themePreference={themePreference} />
    </Screen>
  );
};

export default SettingScreen;
