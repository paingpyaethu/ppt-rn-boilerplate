import React, { useState } from "react";
import { Switch, TextStyle, View } from "react-native";
import { useAppTheme } from "@/theme/hooks/useAppTheme";
import { SettingsRow } from "@/components/molecules";
import { SettingsCard } from "@/components/organisms";
import { Screen } from "@/components/template";
import { $styles } from "@/theme/styles";
import { ThemedStyle } from "@/theme/ThemeProvider/types";
import { ThemedButton, ThemedText } from "@/components/atoms";
import { Paths } from "@/navigation/paths";
import { SettingsScreenProps } from "@/navigation/Stacks/SettingStack/types";
import {
  ChevronRightIcon,
  DarkLightIcon,
  EditIcon,
  GlobeIcon,
  NotiBellIcon,
} from "@/svg/icon.common";

const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  const { theme, themed, setThemeContextOverride } = useAppTheme();

  const [pushEnabled, setPushEnabled] = useState(true);

  return (
    <Screen preset="scroll">
      <View style={[$styles.flex1, $styles.container]}>
        <SettingsCard
          title="Settings"
          ContentComponent={
            <View style={{ padding: theme.spacing._10 }}>
              <ThemedText text="General" weight="bold" size="_20" />

              <SettingsRow
                icon={<GlobeIcon fill={theme.colors.text} />}
                title="Language"
                right={
                  <>
                    <ThemedText
                      text="English"
                      weight="medium"
                      style={themed($languageText)}
                    />
                    <ChevronRightIcon fill={theme.colors.text} />
                  </>
                }
                divider
                onPress={() => {
                  navigation.navigate(Paths.LanguageSettings);
                }}
              />

              <SettingsRow
                icon={<DarkLightIcon fill={theme.colors.text} />}
                title="Theme"
                right={
                  <>
                    <ThemedText text="Light" />
                    <ChevronRightIcon fill={theme.colors.text} />
                  </>
                }
                onPress={() => {
                  setThemeContextOverride("light");
                }}
              />

              <SettingsRow
                icon={<DarkLightIcon fill={theme.colors.text} />}
                title="Theme"
                right={
                  <>
                    <ThemedText text="Dark" />
                    <ChevronRightIcon fill={theme.colors.text} />
                  </>
                }
                onPress={() => {
                  setThemeContextOverride("dark");
                }}
              />

              <ThemedText
                text="Account"
                weight="bold"
                size="_20"
                style={themed($sectionTitle)}
              />

              <SettingsRow
                icon={<EditIcon fill={theme.colors.text} />}
                title="Edit Profile"
                subtitle="Privacy & Security"
                right={<ChevronRightIcon fill={theme.colors.text} />}
              />

              <ThemedText
                text="Notifications"
                weight="bold"
                size="_20"
                style={themed($sectionTitle)}
              />

              <SettingsRow
                icon={<NotiBellIcon fill={theme.colors.text} />}
                title="Push Notifications"
                subtitle="Email Preferences"
                right={
                  <Switch
                    value={pushEnabled}
                    onValueChange={setPushEnabled}
                    trackColor={{
                      false: "rgba(255,255,255,0.20)",
                      true: "rgba(63,201,140,0.55)",
                    }}
                    thumbColor="#FFFFFF"
                    ios_backgroundColor="rgba(255,255,255,0.20)"
                  />
                }
              />
            </View>
          }
          FooterComponent={
            <ThemedButton
              text="Log out"
              style={{ marginBottom: theme.spacing._10 }}
            />
          }
        />
      </View>
    </Screen>
  );
};

export default SettingsScreen;

const $languageText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.primary,
});

const $sectionTitle: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginTop: spacing._14,
});
