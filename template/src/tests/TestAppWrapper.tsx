import { QueryClientProvider } from "@tanstack/react-query";
import { type PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";
import { KeyboardProvider } from "react-native-keyboard-controller";

import { queryClient } from "@/services/queryClient";
import { ThemeProvider } from "@/theme";
import i18n from "@/translations";
import { appStorage } from "@/utils/storage";

function TestAppWrapper({ children }: Readonly<PropsWithChildren>) {
  return (
    <KeyboardProvider>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider storage={appStorage}>{children}</ThemeProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </KeyboardProvider>
  );
}

export default TestAppWrapper;
