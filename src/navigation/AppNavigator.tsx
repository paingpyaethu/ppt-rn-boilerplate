import { useTheme } from "@/theme";
import { NavigationContainer } from "@react-navigation/native";
import React, { ComponentProps } from "react";
import { View } from "react-native";
import { AppStackParamList } from "@/navigation/types";
import { linking } from "@/navigation/linking";
import { navigationRef } from "@/navigation/navigationUtilities";
import { AppStack } from "@/navigation/Stacks";

export interface NavigationProps extends Partial<
  ComponentProps<typeof NavigationContainer<AppStackParamList>>
> { }

const AppNavigator = (props: NavigationProps) => {
  const { navigationTheme } = useTheme();

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={navigationTheme}
      linking={linking}
      {...props}
    >
      <View
        style={{ flex: 1, backgroundColor: navigationTheme.colors.background }}
      >
        <AppStack />
      </View>
    </NavigationContainer>
  );
};

export default AppNavigator;
