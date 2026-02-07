import React from "react";
import { View } from "react-native";
import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle";

const SafeTop = () => {
  const top = useSafeAreaInsetsStyle(["top"], "padding");
  return <View style={[top]} />;
};

export default SafeTop;
