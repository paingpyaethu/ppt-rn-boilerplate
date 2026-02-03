import React from "react";
import { Dimensions, View } from "react-native";
import { useTheme } from "@/theme";
import { IconByVariant } from "@/components/atoms";

interface TabBarIconProps {
  icon: string;
}

const width = Dimensions.get("window").width / 4;

const TabBarIcon = ({ icon }: TabBarIconProps) => {
  const { layout, colors } = useTheme();
  return (
    <View style={[layout.center, { width: width }]}>
      <IconByVariant path={icon} stroke={colors.background} />
    </View>
  );
};

export default TabBarIcon;
