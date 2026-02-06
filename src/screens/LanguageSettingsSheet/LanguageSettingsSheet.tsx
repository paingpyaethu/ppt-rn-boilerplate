import React, { useMemo } from "react";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "@/theme";
import { useI18n } from "@/hooks";
import { useTranslation } from "react-i18next";
import { SupportedLanguages } from "@/hooks/language/schema";
import {
  Heading,
  Caption,
  Text,
  AssetByVariant,
  Button,
  RadioButton,
} from "@/components/atoms";
import type { RadioButtonOption } from "@/components/atoms";
import { Screen } from "@/components/template";
import {
  languageSchema,
  LanguageFormValues,
} from "@/schemas/language.schema";

const LanguageSettingsSheet = () => {
  const { colors, gutters, layout } = useTheme();
  const { t } = useTranslation();
  const { language, changeLanguage } = useI18n();

  const { control, handleSubmit } = useForm<LanguageFormValues>({
    resolver: zodResolver(languageSchema),
    defaultValues: {
      language,
    },
  });

  const languageOptions: RadioButtonOption[] = useMemo(
    () => [
      {
        value: SupportedLanguages.EN_EN,
        label: t("common.languageSettings.english"),
        description: t("common.languageSettings.englishNative"),
        leftElement: <Text size="size_20">🇬🇧</Text>,
      },
      {
        value: SupportedLanguages.MM_MM,
        label: t("common.languageSettings.myanmar"),
        description: t("common.languageSettings.myanmarNative"),
        leftElement: <Text size="size_20">🇲🇲</Text>,
      },
    ],
    [t],
  );

  const onSubmit = (data: LanguageFormValues) => {
    changeLanguage(data.language);
  };

  return (
    <Screen backgroundColor={colors.purple100} preset="fixed" contentContainerStyle={[gutters.padding_16]}>
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
        {t("common.languageSettings.title")}
      </Heading>
      <Caption size="small" align="center" style={[gutters.marginBottom_24]}>
        {t("common.languageSettings.subtitle")}
      </Caption>

      {/* Language Radio Group */}
      <RadioButton
        name="language"
        control={control}
        options={languageOptions}
        testID="language-radio"
      />

      {/* Apply Button */}
      <Button
        variant="primary"
        size="large"
        fullWidth
        onPress={handleSubmit(onSubmit)}
        style={[gutters.marginTop_24]}
        testID="apply-language-button"
      >
        {t("common.languageSettings.apply")}
      </Button>
    </Screen>
  );
};

export default LanguageSettingsSheet;