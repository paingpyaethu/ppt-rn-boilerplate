import React from "react";
import { Button, Card, Heading, IconByVariant, Text } from "@/components/atoms";
import { Screen } from "@/components/template";
import { View } from "react-native";
import { useTheme } from "@/theme";

const SettingScreen = () => {
  const { gutters } = useTheme();
  return (
    <Screen
      preset="scroll"
      safeAreaEdges={["top"]}
      contentContainerStyle={{ padding: 16 }}
    >
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
      <Button leftIcon={<IconByVariant path="send" stroke={"white"} />}>
        Send
      </Button>
      <View style={{ marginVertical: 16 }} />

      <Card>
        <Text>Simple card content</Text>
      </Card>
      <View style={{ marginVertical: 16 }} />

      <Card
        variant="outlined"
        header={<Heading>Card Title</Heading>}
        footer={<Button onPress={() => {}}>Save</Button>}
        pressable
        contentStyle={[gutters.padding_10]}
        onPress={() => console.log("Card pressed")}
      >
        <Text>Card body content with header and footer</Text>
      </Card>
    </Screen>
  );
};

export default SettingScreen;
