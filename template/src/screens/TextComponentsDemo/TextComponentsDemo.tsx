import React from "react";
import { View } from "react-native";
import { useTheme } from "@/theme";
import {
  Text,
  Heading,
  Caption,
  Label,
  ErrorText,
  Link,
  SafeTop,
  TextInput,
} from "@/components/atoms";
import { Screen } from "@/components/template";
import { SupportedLanguages } from "@/hooks/language/schema";
import { AppStackScreenProps } from "@/navigation/types";

/**
 * Demo screen showcasing all Text components
 * This can be used as a reference for implementing text components in your app
 */
const TextComponentsDemo = ({
  navigation,
}: AppStackScreenProps<"TextComponentsDemo">) => {
  const { gutters, backgrounds, layout } = useTheme();
  const [showError, setShowError] = React.useState(true);

  return (
    <Screen preset="scroll" contentContainerStyle={[gutters.padding_16]}>
      <SafeTop />
      {/* Headings */}
      <View style={[gutters.marginBottom_32]}>
        <Heading level={1} fontFamily={SupportedLanguages.EN_EN}>
          Heading 1
        </Heading>
        <Heading level={2} fontFamily={SupportedLanguages.EN_EN}>
          Heading 2
        </Heading>
        <Heading level={3} fontFamily={SupportedLanguages.EN_EN}>
          Heading 3
        </Heading>
        <Heading level={4} fontFamily={SupportedLanguages.EN_EN}>
          Heading 4
        </Heading>
        <Heading level={5} fontFamily={SupportedLanguages.EN_EN}>
          Heading 5
        </Heading>
        <Heading level={6} fontFamily={SupportedLanguages.EN_EN}>
          Heading 6
        </Heading>
      </View>

      {/* Text Sizes */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Text Sizes
        </Heading>
        <Text
          size="size_12"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Size 12: Small text
        </Text>
        <Text
          size="size_16"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Size 16: Body text (default)
        </Text>
        <Text
          size="size_24"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Size 24: Large text
        </Text>
        <Text
          size="size_32"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Size 32: Extra large
        </Text>
        <Text
          size="size_40"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Size 40: Hero text
        </Text>
      </View>

      {/* Font Weights */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Font Weights
        </Heading>
        <Text
          weight="regular"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Regular weight
        </Text>
        <Text
          weight="medium"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Medium weight
        </Text>
        <Text
          weight="semiBold"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Semi Bold weight
        </Text>
        <Text
          weight="bold"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Bold weight
        </Text>
      </View>

      {/* Colors */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Colors
        </Heading>
        <Text
          color="gray800"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Gray 800 (default)
        </Text>
        <Text
          color="gray400"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Gray 400
        </Text>
        <Text
          color="purple500"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Purple 500
        </Text>
        <Text
          color="red500"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Red 500
        </Text>
      </View>

      {/* Text Alignment */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Text Alignment
        </Heading>
        <Text
          align="left"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Left aligned text
        </Text>
        <Text
          align="center"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Center aligned text
        </Text>
        <Text
          align="right"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Right aligned text
        </Text>
        <Text
          align="justify"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </Text>
      </View>

      {/* Text Transform */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Text Transform
        </Heading>
        <Text
          transform="none"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Normal text
        </Text>
        <Text
          transform="uppercase"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Uppercase text
        </Text>
        <Text
          transform="capitalize"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          capitalize text
        </Text>
        <Text
          transform="lowercase"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          LOWERCASE TEXT
        </Text>
      </View>

      {/* Captions */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Captions
        </Heading>
        <Caption
          size="small"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Small caption text
        </Caption>
        <Caption
          size="medium"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Medium caption text
        </Caption>
        <Caption
          size="small"
          color="purple500"
          fontFamily={SupportedLanguages.EN_EN}
        >
          Colored caption
        </Caption>
      </View>

      {/* Labels */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Labels
        </Heading>
        <Label
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Regular label
        </Label>
        <Label
          required
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Required label
        </Label>
        <Label
          size="small"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Small label
        </Label>
        <Label size="large" fontFamily={SupportedLanguages.EN_EN}>
          Large label
        </Label>
      </View>

      {/* Error Text */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Error Text
        </Heading>
        <ErrorText
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          This field is required
        </ErrorText>
        <ErrorText visible={showError} fontFamily={SupportedLanguages.EN_EN}>
          Conditional error message
        </ErrorText>
        <Link
          size="size_12"
          fontFamily={SupportedLanguages.EN_EN}
          onPress={() => setShowError(!showError)}
          style={[gutters.marginTop_12]}
        >
          Toggle error visibility
        </Link>
      </View>

      {/* Links */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Links
        </Heading>
        <Link
          onPress={() => console.log("Link pressed")}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Regular link
        </Link>
        <Link
          underline
          onPress={() => console.log("Underlined link pressed")}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Underlined link
        </Link>
        <Link
          disabled
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Disabled link
        </Link>
        <Link
          size="size_12"
          fontFamily={SupportedLanguages.EN_EN}
          onPress={() => console.log("Small link pressed")}
        >
          Small link
        </Link>
      </View>

      {/* Combined Example */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Combined Example (Form)
        </Heading>

        <Link
          underline
          onPress={() => navigation.navigate("AuthStack", { screen: "Login" })}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Check It Here
        </Link>
      </View>

      {/* Number of Lines */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Number of Lines
        </Heading>
        <Text
          numberOfLines={2}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          This is a long text that will be truncated after two lines. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris.
        </Text>
        <Text numberOfLines={1} fontFamily={SupportedLanguages.EN_EN}>
          Single line truncated text. This is a very long text that should be
          truncated with ellipsis.
        </Text>
      </View>
    </Screen>
  );
};

export default TextComponentsDemo;
