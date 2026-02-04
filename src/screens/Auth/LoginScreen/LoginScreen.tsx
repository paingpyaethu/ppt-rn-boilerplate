import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextInput, Button } from "@/components/atoms";
import { Screen } from "@/components/template";
import { useTranslation } from "react-i18next";

const loginSchema = z.object({
  email: z.email({ message: "Invalid email" }).min(1, "Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

const LoginScreen = () => {
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: LoginForm) => console.log(data);

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
