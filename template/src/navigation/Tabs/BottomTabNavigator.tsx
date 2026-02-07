import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { AppBottomTabParamList } from "@/navigation/Tabs/types";
import { HomeTabStack, SettingTabStack } from "@/navigation/Stacks";
import { rpx } from "@/utils/responsive";
import { TabBarIcon } from "@/components/molecules";
import { useTheme } from "@/theme";

const Tab = createBottomTabNavigator<AppBottomTabParamList>();

const BottomTabNavigator = () => {
  const { bottom } = useSafeAreaInsets();
  const { t } = useTranslation();

  const { colors, components, gutters } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [components.tabBar, { height: bottom + rpx(70) }],
        tabBarActiveTintColor: colors.purple500,
        tabBarInactiveTintColor: colors.gray200,
        tabBarLabelStyle: [components.tabBarLabel],
        tabBarItemStyle: [gutters.paddingTop_12],
        tabBarLabelPosition: "below-icon",
      }}
    >
      <Tab.Screen
        name={"HomeTabStack"}
        component={HomeTabStack}
        options={{
          tabBarLabel: t("bottomtabs.home"),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              icon="fire"
              stroke={focused ? colors.purple500 : colors.gray200}
            />
          ),
        }}
      />

      <Tab.Screen
        name={"SettingTabStack"}
        component={SettingTabStack}
        options={{
          tabBarLabel: t("bottomtabs.settings"),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              icon="theme"
              stroke={focused ? colors.purple500 : colors.gray200}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
