import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import AppNavigator from '@/navigation/AppNavigator';
import { queryClient } from '@/services/queryClient';
import { ThemeProvider } from '@/theme';
import { appStorage } from '@/utils/storage';

const App = () => {
  return (
    <KeyboardProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider storage={appStorage}>
          <AppNavigator />
        </ThemeProvider>
      </QueryClientProvider>
    </KeyboardProvider>
  );
};

export default App;
