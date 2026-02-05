import { fireEvent, render, screen } from "@testing-library/react-native";
import { Text } from "react-native";

import TestAppWrapper from "@/tests/TestAppWrapper";

import Card from "./Card";

describe("Card", () => {
  it("renders as non-pressable View with children, styles, and accessibility", () => {
    render(
      <Card
        accessibilityLabel="Custom Label"
        style={{ marginTop: 20 }}
        testID="test-card"
        variant="outlined"
      >
        <Text>Card Content</Text>
      </Card>,
      { wrapper: TestAppWrapper }
    );

    const card = screen.getByTestId("test-card");
    expect(screen.getByText("Card Content")).toBeTruthy();
    expect(card).toHaveStyle({ marginTop: 20 });
    expect(card.props.accessibilityLabel).toBe("Custom Label");
    expect(card.props.accessibilityRole).toBeUndefined();
  });

  it("renders header and footer with custom styles when provided", () => {
    const { rerender } = render(
      <Card
        contentStyle={{ padding: 16 }}
        footer={<Text>Footer</Text>}
        footerStyle={{ paddingTop: 8 }}
        header={<Text>Header</Text>}
        headerStyle={{ paddingBottom: 8 }}
        testID="test-card"
      >
        <Text>Body</Text>
      </Card>,
      { wrapper: TestAppWrapper }
    );

    expect(screen.getByText("Header")).toBeTruthy();
    expect(screen.getByText("Body")).toBeTruthy();
    expect(screen.getByText("Footer")).toBeTruthy();
    expect(screen.getByTestId("test-card-content")).toHaveStyle({ padding: 16 });
    expect(screen.getByTestId("test-card-header")).toHaveStyle({ paddingBottom: 8 });
    expect(screen.getByTestId("test-card-footer")).toHaveStyle({ paddingTop: 8 });

    // Re-render without header/footer to test conditional rendering
    rerender(
      <Card testID="test-card">
        <Text>Body Only</Text>
      </Card>
    );

    expect(screen.queryByTestId("test-card-header")).toBeNull();
    expect(screen.queryByTestId("test-card-footer")).toBeNull();
  });

  it("renders as pressable, handles onPress, and respects disabled state", () => {
    const mockOnPress = jest.fn();

    const { rerender } = render(
      <Card
        activeOpacity={0.5}
        onPress={mockOnPress}
        pressable
        testID="test-card"
      >
        <Text>Pressable</Text>
      </Card>,
      { wrapper: TestAppWrapper }
    );

    const card = screen.getByTestId("test-card");
    expect(card.props.accessibilityRole).toBe("button");
    expect(card.props.accessibilityState).toEqual({ disabled: false });

    fireEvent.press(card);
    expect(mockOnPress).toHaveBeenCalledTimes(1);

    // Re-render as disabled
    rerender(
      <Card disabled onPress={mockOnPress} pressable testID="test-card">
        <Text>Disabled</Text>
      </Card>
    );

    const disabledCard = screen.getByTestId("test-card");
    expect(disabledCard.props.accessibilityState).toEqual({ disabled: true });

    fireEvent.press(disabledCard);
    expect(mockOnPress).toHaveBeenCalledTimes(1); // Still 1, not called again
  });
});
