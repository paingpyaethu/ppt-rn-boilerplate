import { TextStyle } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { AppBottomTabParamList } from "@/navigation/Tabs/types";
import { Paths } from "@/navigation/paths";
import { HomeStack, SettingStack } from "@/navigation/Stacks";
import { rpx } from "@/utils/responsive";
import { TabBarIcon } from "@/components/molecules";
import { useTheme } from "@/theme";

const Tab = createBottomTabNavigator<AppBottomTabParamList>();

const BottomTabNavigator = () => {
  const { bottom } = useSafeAreaInsets();
  const { t } = useTranslation();

  const { colors, components, gutters } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [components.tabBar, { height: bottom + rpx(70) }],
        tabBarActiveTintColor: colors.purple500,
        tabBarInactiveTintColor: colors.purple100,
        tabBarLabelStyle: themed($tabBarLabel),
        tabBarItemStyle: [gutters.paddingTop_12],
        tabBarLabelPosition: "below-icon",
      }}
    >
      <Tab.Screen
        name={Paths.HomeTabStack}
        component={HomeStack}
        options={{
          tabBarLabel: t("bottomtabs.home"),
          tabBarIcon: () => <TabBarIcon icon="fire" />,
        }}
      />

      <Tab.Screen
        name={Paths.SettingTabStack}
        component={SettingStack}
        options={{
          tabBarLabel: t("bottomtabs.settings"),
          tabBarIcon: () => <TabBarIcon icon="theme" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const $tabBarLabel: ThemedStyle<TextStyle> = ({ spacing, typography }) => ({
  fontSize: typography.sizes._14,
  fontFamily: typography.families.medium,
  lineHeight: spacing._24,
  paddingTop: spacing._4,
});
