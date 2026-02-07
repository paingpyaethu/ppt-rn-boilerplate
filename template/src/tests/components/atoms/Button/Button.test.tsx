import { fireEvent, render, screen } from "@testing-library/react-native";
import { Text, View } from "react-native";

import { Button } from "@/components/atoms";
import TestAppWrapper from "@/tests/TestAppWrapper";

describe("Button", () => {
  it("renders string/custom children with icons, handles onPress, and applies styles", () => {
    const mockOnPress = jest.fn();

    const { rerender } = render(
      <Button
        accessibilityLabel="Test Button"
        leftIcon={<Text>L</Text>}
        onPress={mockOnPress}
        rightIcon={<Text>R</Text>}
        size="large"
        style={{ marginTop: 10 }}
        testID="test-btn"
        textStyle={{ letterSpacing: 1 }}
        variant="secondary"
      >
        Click Me
      </Button>,
      { wrapper: TestAppWrapper }
    );

    const button = screen.getByTestId("test-btn");
    expect(screen.getByText("Click Me")).toBeTruthy();
    expect(screen.getByTestId("test-btn-left-icon")).toBeTruthy();
    expect(screen.getByTestId("test-btn-right-icon")).toBeTruthy();
    expect(button.props.accessibilityRole).toBe("button");
    expect(button.props.accessibilityLabel).toBe("Test Button");
    expect(button).toHaveStyle({ marginTop: 10 });

    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);

    // Test non-string children and fullWidth
    rerender(
      <Button fullWidth size="small" testID="test-btn">
        <View testID="custom-content">
          <Text>Custom</Text>
        </View>
      </Button>
    );

    expect(screen.getByTestId("custom-content")).toBeTruthy();
  });

  it("shows loading indicator and disables button when loading or disabled", () => {
    const mockOnPress = jest.fn();

    const { rerender } = render(
      <Button loading onPress={mockOnPress} testID="test-btn">
        Submit
      </Button>,
      { wrapper: TestAppWrapper }
    );

    expect(screen.getByTestId("test-btn-loader")).toBeTruthy();
    expect(screen.queryByText("Submit")).toBeNull();
    expect(screen.getByTestId("test-btn").props.accessibilityState).toEqual({
      disabled: true,
    });

    fireEvent.press(screen.getByTestId("test-btn"));
    expect(mockOnPress).not.toHaveBeenCalled();

    // Test disabled prop
    rerender(
      <Button disabled onPress={mockOnPress} testID="test-btn">
        Disabled
      </Button>
    );

    expect(screen.getByTestId("test-btn").props.accessibilityState).toEqual({
      disabled: true,
    });

    fireEvent.press(screen.getByTestId("test-btn"));
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
