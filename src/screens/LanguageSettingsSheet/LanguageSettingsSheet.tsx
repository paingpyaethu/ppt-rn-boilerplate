import React from "react";
import { ThemedButton, ThemedIcon } from "@/components/atoms";
import { Screen } from "@/components/template";
import { $styles } from "@/theme/styles";
import { useForm } from "react-hook-form";
import { ThemedRadioGroup } from "@/components/molecules";
import { useI18n } from "@/hooks/language/useI18n";
import { SupportedLanguages } from "@/hooks/language/schema";
import { goBack } from "@/navigation/navigationUtilities";

type FormValues = {
  language: SupportedLanguages.MM_MM | SupportedLanguages.EN_EN;
};

const LanguageSettingsSheet = () => {
  const { language, changeLanguage } = useI18n();

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { language: language },
  });

  const onSubmit = (data: FormValues) => {
    changeLanguage(
      data.language === SupportedLanguages.MM_MM
        ? SupportedLanguages.MM_MM
        : SupportedLanguages.EN_EN,
    );
    goBack();
  };

  return (
    <Screen contentContainerStyle={[$styles.sheetContainer]}>
      <ThemedIcon icon="language" style={{ alignSelf: "center" }} />
      <ThemedRadioGroup
        control={control}
        name="language"
        label="Change your language"
        options={[
          { label: "မြန်မာ", value: SupportedLanguages.MM_MM },
          { label: "English", value: SupportedLanguages.EN_EN },
        ]}
      />
      <ThemedButton text="Change Language" onPress={handleSubmit(onSubmit)} />
    </Screen>
  );
};

export default LanguageSettingsSheet;
