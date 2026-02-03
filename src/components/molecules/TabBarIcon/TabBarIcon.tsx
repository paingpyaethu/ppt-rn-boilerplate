import React from "react";
import { ColorValue, Dimensions, View } from "react-native";
import { useTheme } from "@/theme";
import { IconByVariant } from "@/components/atoms";

interface TabBarIconProps {
  icon: string;
  stroke?: ColorValue;
}

const width = Dimensions.get("window").width / 4;

const TabBarIcon = ({ icon, stroke }: TabBarIconProps) => {
  const { layout, colors } = useTheme();
  return (
    <View style={[layout.center, { width: width }]}>
      <IconByVariant path={icon} stroke={stroke ?? colors.purple500} />
    </View>
  );
};

export default TabBarIcon;
