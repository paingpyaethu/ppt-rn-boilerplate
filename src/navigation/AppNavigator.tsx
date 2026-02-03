import { useTheme } from "@/theme";
import { NavigationContainer } from "@react-navigation/native";
import React, { ComponentProps } from "react";
import { View } from "react-native";
import { AppStackParamList } from "@/navigation/types";
import { linking } from "@/navigation/linking";
import { navigationRef } from "@/navigation/navigationUtilities";
import { AppStack } from "@/navigation/Stacks";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { SystemBars } from "react-native-edge-to-edge";
export interface NavigationProps extends Partial<
  ComponentProps<typeof NavigationContainer<AppStackParamList>>
> {}

const AppNavigator = (props: NavigationProps) => {
  const { navigationTheme, variant } = useTheme();

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer
        ref={navigationRef}
        theme={navigationTheme}
        linking={linking}
        {...props}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: navigationTheme.colors.background,
          }}
        >
          <SystemBars style={variant === "dark" ? "light" : "dark"} />
          <AppStack />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
