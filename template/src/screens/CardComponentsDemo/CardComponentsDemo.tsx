import React from "react";
import { View } from "react-native";
import { useTheme } from "@/theme";
import {
  Card,
  Text,
  Heading,
  Caption,
  IconByVariant,
  SafeTop,
} from "@/components/atoms";
import { Screen } from "@/components/template";
import { SupportedLanguages } from "@/hooks/language/schema";

/**
 * Demo screen showcasing all Card components
 * This can be used as a reference for implementing cards in your app
 */
const CardComponentsDemo = () => {
  const { gutters, layout, colors } = useTheme();

  return (
    <Screen preset="scroll" contentContainerStyle={[gutters.padding_16]}>
      <SafeTop />
      <Heading
        level={3}
        fontFamily={SupportedLanguages.EN_EN}
        style={[gutters.marginBottom_6]}
      >
        Cards
      </Heading>
      <Caption
        size="small"
        fontFamily={SupportedLanguages.EN_EN}
        style={[gutters.marginBottom_24]}
      >
        Variants, headers, footers, and pressable states
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
        <Card variant="elevated" style={[gutters.marginBottom_12]}>
          <Text weight="medium" fontFamily={SupportedLanguages.EN_EN}>
            Elevated
          </Text>
          <Text size="size_14" color="gray400" fontFamily={SupportedLanguages.EN_EN}>
            Shadow and raised background.
          </Text>
        </Card>
        <Card variant="outlined" style={[gutters.marginBottom_12]}>
          <Text weight="medium" fontFamily={SupportedLanguages.EN_EN}>
            Outlined
          </Text>
          <Text size="size_14" color="gray400" fontFamily={SupportedLanguages.EN_EN}>
            Border with transparent background.
          </Text>
        </Card>
        <Card variant="filled" style={[gutters.marginBottom_12]}>
          <Text weight="medium" fontFamily={SupportedLanguages.EN_EN}>
            Filled
          </Text>
          <Text size="size_14" color="gray400" fontFamily={SupportedLanguages.EN_EN}>
            Subtle background color.
          </Text>
        </Card>
        <Card variant="flat">
          <Text weight="medium" fontFamily={SupportedLanguages.EN_EN}>
            Flat
          </Text>
          <Text size="size_14" color="gray400" fontFamily={SupportedLanguages.EN_EN}>
            Plain background without border.
          </Text>
        </Card>
      </View>

      {/* Header & Footer */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Header & Footer
        </Heading>
        <Card
          variant="outlined"
          header={
            <Text weight="medium" fontFamily={SupportedLanguages.EN_EN}>
              Header Title
            </Text>
          }
          footer={
            <View
              style={[layout.row, layout.justifyBetween, layout.itemsCenter]}
            >
              <Text
                size="size_12"
                color="gray400"
                fontFamily={SupportedLanguages.EN_EN}
              >
                Footer note
              </Text>
              <Text
                size="size_12"
                color="purple500"
                fontFamily={SupportedLanguages.EN_EN}
              >
                Action
              </Text>
            </View>
          }
        >
          <Text size="size_14" fontFamily={SupportedLanguages.EN_EN}>
            This card demonstrates optional header and footer content.
          </Text>
        </Card>
      </View>

      {/* Content Layout */}
      <View style={[gutters.marginBottom_32]}>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Content Layout
        </Heading>
        <Card variant="filled">
          <View style={[layout.row, layout.itemsCenter, gutters.gap_12]}>
            <IconByVariant
              path="fire"
              stroke={colors.purple500}
              width={22}
              height={22}
            />
            <View>
              <Text weight="medium" fontFamily={SupportedLanguages.EN_EN}>
                Feature Highlight
              </Text>
              <Text
                size="size_12"
                color="gray400"
                fontFamily={SupportedLanguages.EN_EN}
              >
                Use layout utilities inside cards.
              </Text>
            </View>
          </View>
        </Card>
      </View>

      {/* Pressable & Disabled */}
      <View>
        <Heading
          level={4}
          fontFamily={SupportedLanguages.EN_EN}
          style={[gutters.marginBottom_16]}
        >
          Pressable & Disabled
        </Heading>
        <Card
          variant="elevated"
          pressable
          onPress={() => console.log("Card pressed")}
          style={[gutters.marginBottom_12]}
          accessibilityLabel="Pressable card"
        >
          <Text weight="medium" fontFamily={SupportedLanguages.EN_EN}>
            Pressable Card
          </Text>
          <Text
            size="size_14"
            color="gray400"
            fontFamily={SupportedLanguages.EN_EN}
          >
            Tap to trigger an action.
          </Text>
        </Card>
        <Card variant="elevated" disabled>
          <Text weight="medium" fontFamily={SupportedLanguages.EN_EN}>
            Disabled Card
          </Text>
          <Text
            size="size_14"
            color="gray400"
            fontFamily={SupportedLanguages.EN_EN}
          >
            Disabled state with reduced opacity.
          </Text>
        </Card>
      </View>
    </Screen>
  );
};

export default CardComponentsDemo;
