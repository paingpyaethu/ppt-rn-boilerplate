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
} from "@/components/atoms";

/**
 * Demo screen showcasing all Text components
 * This can be used as a reference for implementing text components in your app
 */
const TextComponentsDemo = () => {
  const { gutters, backgrounds, layout } = useTheme();
  const [showError, setShowError] = React.useState(true);

  return (
    <View style={[layout.flex_1, backgrounds.background, gutters.padding_16]}>
      {/* Headings */}
      <View style={[gutters.marginBottom_32]}>
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
      </View>

      {/* Text Sizes */}
      <View style={[gutters.marginBottom_32]}>
        <Heading level={4} style={[gutters.marginBottom_16]}>
          Text Sizes
        </Heading>
        <Text size="size_12" style={[gutters.marginBottom_12]}>
          Size 12: Small text
        </Text>
        <Text size="size_16" style={[gutters.marginBottom_12]}>
          Size 16: Body text (default)
        </Text>
        <Text size="size_24" style={[gutters.marginBottom_12]}>
          Size 24: Large text
        </Text>
        <Text size="size_32" style={[gutters.marginBottom_12]}>
          Size 32: Extra large
        </Text>
        <Text size="size_40" style={[gutters.marginBottom_12]}>
          Size 40: Hero text
        </Text>
      </View>

      {/* Font Weights */}
      <View style={[gutters.marginBottom_32]}>
        <Heading level={4} style={[gutters.marginBottom_16]}>
          Font Weights
        </Heading>
        <Text weight="regular" style={[gutters.marginBottom_12]}>
          Regular weight
        </Text>
        <Text weight="medium" style={[gutters.marginBottom_12]}>
          Medium weight
        </Text>
        <Text weight="semiBold" style={[gutters.marginBottom_12]}>
          Semi Bold weight
        </Text>
        <Text weight="bold" style={[gutters.marginBottom_12]}>
          Bold weight
        </Text>
      </View>

      {/* Colors */}
      <View style={[gutters.marginBottom_32]}>
        <Heading level={4} style={[gutters.marginBottom_16]}>
          Colors
        </Heading>
        <Text color="gray800" style={[gutters.marginBottom_12]}>
          Gray 800 (default)
        </Text>
        <Text color="gray400" style={[gutters.marginBottom_12]}>
          Gray 400
        </Text>
        <Text color="purple500" style={[gutters.marginBottom_12]}>
          Purple 500
        </Text>
        <Text color="red500" style={[gutters.marginBottom_12]}>
          Red 500
        </Text>
      </View>

      {/* Text Alignment */}
      <View style={[gutters.marginBottom_32]}>
        <Heading level={4} style={[gutters.marginBottom_16]}>
          Text Alignment
        </Heading>
        <Text align="left" style={[gutters.marginBottom_12]}>
          Left aligned text
        </Text>
        <Text align="center" style={[gutters.marginBottom_12]}>
          Center aligned text
        </Text>
        <Text align="right" style={[gutters.marginBottom_12]}>
          Right aligned text
        </Text>
        <Text align="justify" style={[gutters.marginBottom_12]}>
          Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </Text>
      </View>

      {/* Text Transform */}
      <View style={[gutters.marginBottom_32]}>
        <Heading level={4} style={[gutters.marginBottom_16]}>
          Text Transform
        </Heading>
        <Text transform="none" style={[gutters.marginBottom_12]}>
          Normal text
        </Text>
        <Text transform="uppercase" style={[gutters.marginBottom_12]}>
          Uppercase text
        </Text>
        <Text transform="capitalize" style={[gutters.marginBottom_12]}>
          capitalize text
        </Text>
        <Text transform="lowercase" style={[gutters.marginBottom_12]}>
          LOWERCASE TEXT
        </Text>
      </View>

      {/* Captions */}
      <View style={[gutters.marginBottom_32]}>
        <Heading level={4} style={[gutters.marginBottom_16]}>
          Captions
        </Heading>
        <Caption size="small" style={[gutters.marginBottom_12]}>
          Small caption text
        </Caption>
        <Caption size="medium" style={[gutters.marginBottom_12]}>
          Medium caption text
        </Caption>
        <Caption size="small" color="purple500">
          Colored caption
        </Caption>
      </View>

      {/* Labels */}
      <View style={[gutters.marginBottom_32]}>
        <Heading level={4} style={[gutters.marginBottom_16]}>
          Labels
        </Heading>
        <Label style={[gutters.marginBottom_12]}>Regular label</Label>
        <Label required style={[gutters.marginBottom_12]}>
          Required label
        </Label>
        <Label size="small" style={[gutters.marginBottom_12]}>
          Small label
        </Label>
        <Label size="large">Large label</Label>
      </View>

      {/* Error Text */}
      <View style={[gutters.marginBottom_32]}>
        <Heading level={4} style={[gutters.marginBottom_16]}>
          Error Text
        </Heading>
        <ErrorText style={[gutters.marginBottom_12]}>
          This field is required
        </ErrorText>
        <ErrorText visible={showError}>Conditional error message</ErrorText>
        <Link
          size="size_12"
          onPress={() => setShowError(!showError)}
          style={[gutters.marginTop_12]}
        >
          Toggle error visibility
        </Link>
      </View>

      {/* Links */}
      <View style={[gutters.marginBottom_32]}>
        <Heading level={4} style={[gutters.marginBottom_16]}>
          Links
        </Heading>
        <Link
          onPress={() => console.log("Link pressed")}
          style={[gutters.marginBottom_12]}
        >
          Regular link
        </Link>
        <Link
          underline
          onPress={() => console.log("Underlined link pressed")}
          style={[gutters.marginBottom_12]}
        >
          Underlined link
        </Link>
        <Link disabled style={[gutters.marginBottom_12]}>
          Disabled link
        </Link>
        <Link size="size_12" onPress={() => console.log("Small link pressed")}>
          Small link
        </Link>
      </View>

      {/* Combined Example */}
      <View style={[gutters.marginBottom_32]}>
        <Heading level={4} style={[gutters.marginBottom_16]}>
          Combined Example (Form)
        </Heading>
        <View style={[gutters.marginBottom_16]}>
          <Label required style={[gutters.marginBottom_12]}>
            Email Address
          </Label>
          {/* TextInput would go here */}
          <View
            style={{
              height: 48,
              borderWidth: 1,
              borderColor: "#DFDFDF",
              borderRadius: 8,
              marginBottom: 4,
            }}
          />
          <ErrorText visible={false}>Invalid email address</ErrorText>
          <Caption size="small">
            We'll never share your email with anyone
          </Caption>
        </View>

        <View style={[gutters.marginBottom_16]}>
          <Label required>Password</Label>
          <View
            style={{
              height: 48,
              borderWidth: 1,
              borderColor: "#DFDFDF",
              borderRadius: 8,
              marginTop: 8,
              marginBottom: 4,
            }}
          />
          <Link
            size="size_12"
            underline
            onPress={() => console.log("Forgot password")}
          >
            Forgot password?
          </Link>
        </View>
      </View>

      {/* Number of Lines */}
      <View style={[gutters.marginBottom_32]}>
        <Heading level={4} style={[gutters.marginBottom_16]}>
          Number of Lines
        </Heading>
        <Text numberOfLines={2} style={[gutters.marginBottom_12]}>
          This is a long text that will be truncated after two lines. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris.
        </Text>
        <Text numberOfLines={1}>
          Single line truncated text. This is a very long text that should be
          truncated with ellipsis.
        </Text>
      </View>
    </View>
  );
};

export default TextComponentsDemo;
