import { fireEvent, render, screen } from "@testing-library/react-native";

import { Text } from "@/components/atoms";
import TestAppWrapper from "@/tests/TestAppWrapper";

describe("Text", () => {
  it("renders with all font weights, alignment, and handles onPress", () => {
    const mockOnPress = jest.fn();

    const { rerender } = render(
      <Text
        align="center"
        numberOfLines={2}
        onPress={mockOnPress}
        selectable
        style={{ marginTop: 10 }}
        testID="test-text"
        weight="bold"
      >
        Bold Text
      </Text>,
      { wrapper: TestAppWrapper }
    );

    const text = screen.getByTestId("test-text");
    expect(screen.getByText("Bold Text")).toBeTruthy();
    expect(text).toHaveStyle({ marginTop: 10, textAlign: "center" });

    fireEvent.press(text);
    expect(mockOnPress).toHaveBeenCalledTimes(1);

    // Test medium weight
    rerender(
      <Text testID="test-text" weight="medium">
        Medium
      </Text>
    );
    expect(screen.getByText("Medium")).toBeTruthy();

    // Test semiBold weight
    rerender(
      <Text testID="test-text" weight="semiBold">
        SemiBold
      </Text>
    );
    expect(screen.getByText("SemiBold")).toBeTruthy();

    // Test regular (default) weight
    rerender(
      <Text testID="test-text" weight="regular">
        Regular
      </Text>
    );
    expect(screen.getByText("Regular")).toBeTruthy();
  });

  it("applies color, text transform, and uses defaults correctly", () => {
    const { rerender } = render(
      <Text color="purple50" testID="test-text" transform="uppercase">
        Custom Color
      </Text>,
      { wrapper: TestAppWrapper }
    );

    expect(screen.getByText("Custom Color")).toBeTruthy();
    expect(screen.getByTestId("test-text")).toHaveStyle({
      textTransform: "uppercase",
    });

    // Test default color (no color prop) and transform="none"
    rerender(
      <Text testID="test-text" transform="none">
        Default Color
      </Text>
    );
    expect(screen.getByText("Default Color")).toBeTruthy();
  });
});
