import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput, Button, SafeTop } from "@/components/atoms";
import { Screen } from "@/components/template";
import { useTranslation } from "react-i18next";
import { loginSchema, LoginFormValues } from "@/schemas/auth.schema";
import { View } from "react-native";
import { useTheme } from "@/theme";

const LoginScreen = () => {
  const { t } = useTranslation();
  const { gutters } = useTheme();

  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { name: "", phone: "", email: "", password: "" },
  });

  const onSubmit = (data: LoginFormValues) => console.log(data);

  return (
    <Screen preset="scroll" contentContainerStyle={[gutters.padding_16]}>
      <SafeTop />

      <TextInput
        name="name"
        control={control}
        label={t("auth.loginScreen.nameFieldLabel")}
        placeholder={t("auth.loginScreen.nameFieldPlaceholder")}
        autoCapitalize="none"
      />

      <TextInput
        name="phone"
        control={control}
        label={t("auth.loginScreen.phoneFieldLabel")}
        placeholder={t("auth.loginScreen.phoneFieldPlaceholder")}
        keyboardType="phone-pad"
        autoCapitalize="none"
        variant="default"
      />

      <TextInput
        name="email"
        control={control}
        label={t("auth.loginScreen.emailFieldLabel")}
        placeholder={t("auth.loginScreen.emailFieldPlaceholder")}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        name="password"
        control={control}
        label={t("auth.loginScreen.passwordFieldLabel")}
        placeholder={t("auth.loginScreen.passwordFieldPlaceholder")}
        secureTextEntry
        variant="filled"
      />

      <View style={[gutters.marginTop_20]} />

      <Button onPress={handleSubmit(onSubmit)}>
        {t("auth.loginScreen.logIn")}
      </Button>
    </Screen>
  );
};

export default LoginScreen;
