import React from "react";
import { Button, IconByVariant } from "@/components/atoms";
import { Screen } from "@/components/template";

const SettingScreen = () => {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]}>
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
      <Button leftIcon={<IconByVariant path="send" stroke={"white"} />}>Send</Button>
      <Button leftIcon={<IconByVariant path="send" />}>Send</Button>
      <Button leftIcon={<IconByVariant path="send" />}>Send</Button>
      <Button leftIcon={<IconByVariant path="send" />}>Send</Button>
      <Button leftIcon={<IconByVariant path="send" />}>Send</Button>
      <Button leftIcon={<IconByVariant path="send" />}>Send</Button>
      <Button leftIcon={<IconByVariant path="send" />}>Send</Button>
      <Button leftIcon={<IconByVariant path="send" />}>Send</Button>
      <Button leftIcon={<IconByVariant path="send" />}>Send</Button>
      <Button leftIcon={<IconByVariant path="send" />}>Send</Button>
    </Screen>
  );
};

export default SettingScreen;
