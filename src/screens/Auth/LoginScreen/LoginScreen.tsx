import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput, Button } from "@/components/atoms";
import { Screen } from "@/components/template";
import { useTranslation } from "react-i18next";
import { loginSchema, LoginFormValues } from "@/schemas/auth.schema";

const LoginScreen = () => {
  const { t } = useTranslation();

  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: LoginFormValues) => console.log(data);

  return (
    <Screen
      preset="scroll"
      // safeAreaEdges={["top"]}
      contentContainerStyle={{ padding: 40 }}
    >
      <TextInput
        name="email"
        control={control}
        label={t("auth.loginScreen.emailFieldLabel")}
        placeholder={t("auth.loginScreen.emailFieldPlaceholder")}
        keyboardType="email-address"
        autoCapitalize="none"
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

      <TextInput
        name="password"
        control={control}
        label={t("auth.loginScreen.passwordFieldLabel")}
        placeholder={t("auth.loginScreen.passwordFieldPlaceholder")}
        secureTextEntry
        helperText="Hint: you can use any email address and your favorite password :)"
        variant="default"
      />
      <Button style={{ marginTop: 20 }} onPress={handleSubmit(onSubmit)}>
        Login
      </Button>
    </Screen>
  );
};

export default LoginScreen;
