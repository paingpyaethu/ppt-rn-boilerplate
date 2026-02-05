import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Text } from "react-native";

import TestAppWrapper from "@/tests/TestAppWrapper";
import Card from "./Card";

describe("Card Component", () => {
  const renderCard = (props = {}) => {
    return render(
      <TestAppWrapper>
        <Card testID="test-card" {...props}>
          <Text>Card Content</Text>
        </Card>
      </TestAppWrapper>
    );
  };

  describe("Rendering", () => {
    it("renders correctly with default props", () => {
      const { getByTestId } = renderCard();
      expect(getByTestId("test-card")).toBeDefined();
    });

    it("renders children content", () => {
      const { getByText } = renderCard();
      expect(getByText("Card Content")).toBeDefined();
    });

    it("renders header when provided", () => {
      const { getByTestId } = renderCard({
        header: <Text>Header</Text>,
      });
      expect(getByTestId("test-card-header")).toBeDefined();
    });

    it("renders footer when provided", () => {
      const { getByTestId } = renderCard({
        footer: <Text>Footer</Text>,
      });
      expect(getByTestId("test-card-footer")).toBeDefined();
    });
  });

  describe("Variants", () => {
    it.each(["elevated", "outlined", "filled", "flat"] as const)(
      "renders %s variant",
      (variant) => {
        const { getByTestId } = renderCard({ variant });
        expect(getByTestId("test-card")).toBeDefined();
      }
    );
  });

  describe("Sizes", () => {
    it.each(["small", "medium", "large"] as const)(
      "renders %s size",
      (size) => {
        const { getByTestId } = renderCard({ size });
        expect(getByTestId("test-card")).toBeDefined();
      }
    );
  });

  describe("Pressable Behavior", () => {
    it("calls onPress when pressable and pressed", () => {
      const mockOnPress = jest.fn();
      const { getByTestId } = renderCard({
        pressable: true,
        onPress: mockOnPress,
      });

      fireEvent.press(getByTestId("test-card"));
      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it("does not call onPress when disabled", () => {
      const mockOnPress = jest.fn();
      const { getByTestId } = renderCard({
        pressable: true,
        onPress: mockOnPress,
        disabled: true,
      });

      fireEvent.press(getByTestId("test-card"));
      expect(mockOnPress).not.toHaveBeenCalled();
    });

    it("renders as View when not pressable", () => {
      const { getByTestId } = renderCard({ pressable: false });
      const card = getByTestId("test-card");
      // Non-pressable cards don't have accessibility role "button"
      expect(card.props.accessibilityRole).toBeUndefined();
    });
  });

  describe("Accessibility", () => {
    it("applies accessibility label", () => {
      const { getByTestId } = renderCard({
        accessibilityLabel: "Custom Card",
      });
      expect(getByTestId("test-card").props.accessibilityLabel).toBe(
        "Custom Card"
      );
    });

    it("sets accessibility role to button when pressable", () => {
      const { getByTestId } = renderCard({ pressable: true });
      expect(getByTestId("test-card").props.accessibilityRole).toBe("button");
    });
  });
});
