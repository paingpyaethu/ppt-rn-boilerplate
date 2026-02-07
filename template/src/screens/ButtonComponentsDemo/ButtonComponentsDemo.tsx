import React from "react";
import { View } from "react-native";
import { useTheme } from "@/theme";
import {
  Button,
  Heading,
  Caption,
  IconByVariant,
  SafeTop,
} from "@/components/atoms";
import { Screen } from "@/components/template";
import { SupportedLanguages } from "@/hooks/language/schema";

/**
 * Demo screen showcasing all Button components
 * This can be used as a reference for implementing buttons in your app
 */
const ButtonComponentsDemo = () => {
  const { gutters, backgrounds, layout, colors } = useTheme();

  return (
    <Screen preset="scroll" contentContainerStyle={[gutters.padding_16]}>
      <SafeTop />
      <Heading
        level={3}
        fontFamily={SupportedLanguages.EN_EN}
        style={[gutters.marginBottom_6]}
      >
        Buttons
      </Heading>
      <Caption
        size="small"
        fontFamily={SupportedLanguages.EN_EN}
        style={[gutters.marginBottom_24]}
      >
        Variants, sizes, icons, and states
      </Caption>

      {/* Variants */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Variants
        </Heading>
        <Button
          variant="primary"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Primary
        </Button>
        <Button
          variant="secondary"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Secondary
        </Button>
        <Button
          variant="outline"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Outline
        </Button>
        <Button variant="ghost" fontFamily={SupportedLanguages.EN_EN}>
          Ghost
        </Button>
      </View>

      {/* Sizes */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Sizes
        </Heading>
        <Button
          size="small"
          variant="outline"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Small
        </Button>
        <Button
          size="medium"
          variant="outline"
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Medium
        </Button>
        <Button
          size="large"
          variant="outline"
          fontFamily={SupportedLanguages.EN_EN}
        >
          Large
        </Button>
      </View>

      {/* Icons */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Icons
        </Heading>
        <Button
          variant="secondary"
          fontFamily={SupportedLanguages.EN_EN}
          leftIcon={
            <IconByVariant
              path="theme"
              stroke={colors.purple500}
              width={18}
              height={18}
            />
          }
          style={[gutters.marginBottom_12]}
        >
          Left Icon
        </Button>
        <Button
          variant="secondary"
          fontFamily={SupportedLanguages.EN_EN}
          rightIcon={
            <IconByVariant
              path="chevron-right"
              stroke={colors.purple500}
              width={18}
              height={18}
            />
          }
        >
          Right Icon
        </Button>
      </View>

      {/* Full Width */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Full Width
        </Heading>
        <Button
          variant="primary"
          size="large"
          fullWidth
          fontFamily={SupportedLanguages.EN_EN}
        >
          Full Width Primary
        </Button>
      </View>

      {/* States */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          States
        </Heading>
        <Button
          loading
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_12]}
        >
          Loading
        </Button>
        <Button disabled fontFamily={SupportedLanguages.EN_EN}>
          Disabled
        </Button>
      </View>

      {/* Text Styling */}
      <View>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Text Styling
        </Heading>
        <Button
          variant="ghost"
          fontFamily={SupportedLanguages.EN_EN}
          textStyle={[{ textTransform: "uppercase" }]}
        >
          Uppercase Text
        </Button>
      </View>
    </Screen>
  );
};

export default ButtonComponentsDemo;
