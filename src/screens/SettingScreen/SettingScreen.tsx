import React from "react";
import { View } from "react-native";
import { Button, IconByVariant } from "@/components/atoms";

const SettingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center"}}>
      {/* // Basic usage */}
      <Button onPress={() => {}}>Submit</Button>
      {/* // With variants */}
      <Button variant="secondary">Cancel</Button>
      <Button variant="outline">Learn More</Button>
      <Button variant="ghost">Skip</Button>
      {/* // With sizes */}
      <Button size="small">Small</Button>
      <Button size="large">Large</Button>
      {/* // With states */}
      <Button loading>Submitting...</Button>
      <Button disabled>Disabled</Button>
      <Button fullWidth>Full Width</Button>
      {/* // With icons */}
      <Button leftIcon={<IconByVariant path="send" />}>Send</Button>
    </View>
  );
};

export default SettingScreen;
