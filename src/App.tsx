import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";
import AppNavigator from "@/navigation/AppNavigator";
import { queryClient } from "@/services/queryClient";
import { ThemeProvider } from "@/theme";
import { appStorage } from "@/utils/storage";
import { I18nextProvider } from "react-i18next";
import i18n from "@/translations";

const App = () => {
  return (
    <KeyboardProvider>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider storage={appStorage}>
            <AppNavigator />
          </ThemeProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </KeyboardProvider>
  );
};

export default App;
