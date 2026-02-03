import { render, screen, fireEvent } from "@testing-library/react-native";
import { Text, View } from "react-native";

import TestAppWrapper from "@/tests/TestAppWrapper";

import { Button } from "./Button";

describe("Button", () => {
  describe("Rendering", () => {
    it("renders with text children", () => {
      render(<Button testID="button">Click me</Button>, {
        wrapper: TestAppWrapper,
      });

      expect(screen.getByTestId("button")).toBeTruthy();
      expect(screen.getByTestId("button-text")).toBeTruthy();
    });

    it("renders with custom children", () => {
      render(
        <Button testID="button">
          <Text testID="custom-content">Custom Content</Text>
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      expect(screen.getByTestId("custom-content")).toBeTruthy();
    });

    it("renders left icon when provided", () => {
      render(
        <Button testID="button" leftIcon={<View testID="left-icon-content" />}>
          With Icon
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      expect(screen.getByTestId("button-left-icon")).toBeTruthy();
    });

    it("renders right icon when provided", () => {
      render(
        <Button
          testID="button"
          rightIcon={<View testID="right-icon-content" />}
        >
          With Icon
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      expect(screen.getByTestId("button-right-icon")).toBeTruthy();
    });
  });

  describe("Variants", () => {
    it("renders primary variant with correct styles", () => {
      render(
        <Button testID="button" variant="primary">
          Primary
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      const button = screen.getByTestId("button");
      expect(button).toHaveStyle({
        backgroundColor: "#44427D",
      });
    });

    it("renders secondary variant with correct styles", () => {
      render(
        <Button testID="button" variant="secondary">
          Secondary
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      const button = screen.getByTestId("button");
      expect(button).toHaveStyle({
        backgroundColor: "#E1E1EF",
      });
    });

    it("renders outline variant with correct styles", () => {
      render(
        <Button testID="button" variant="outline">
          Outline
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      const button = screen.getByTestId("button");
      expect(button).toHaveStyle({
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#44427D",
      });
    });

    it("renders ghost variant with correct styles", () => {
      render(
        <Button testID="button" variant="ghost">
          Ghost
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      const button = screen.getByTestId("button");
      expect(button).toHaveStyle({
        backgroundColor: "transparent",
      });
    });
  });

  describe("Sizes", () => {
    it("renders small size with correct padding", () => {
      render(
        <Button testID="button" size="small">
          Small
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      const button = screen.getByTestId("button");
      expect(button).toHaveStyle({
        paddingHorizontal: 12,
        paddingVertical: 8,
      });
    });

    it("renders medium size with correct padding", () => {
      render(
        <Button testID="button" size="medium">
          Medium
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      const button = screen.getByTestId("button");
      expect(button).toHaveStyle({
        paddingHorizontal: 16,
        paddingVertical: 12,
      });
    });

    it("renders large size with correct padding", () => {
      render(
        <Button testID="button" size="large">
          Large
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      const button = screen.getByTestId("button");
      expect(button).toHaveStyle({
        paddingHorizontal: 24,
        paddingVertical: 16,
      });
    });
  });

  describe("States", () => {
    it("handles onPress callback", () => {
      const onPressMock = jest.fn();

      render(
        <Button testID="button" onPress={onPressMock}>
          Press me
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      fireEvent.press(screen.getByTestId("button"));
      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it("does not call onPress when disabled", () => {
      const onPressMock = jest.fn();

      render(
        <Button testID="button" onPress={onPressMock} disabled>
          Disabled
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      fireEvent.press(screen.getByTestId("button"));
      expect(onPressMock).not.toHaveBeenCalled();
    });

    it("shows loading indicator when loading", () => {
      render(
        <Button testID="button" loading>
          Loading
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      expect(screen.getByTestId("button-loader")).toBeTruthy();
      expect(screen.queryByTestId("button-text")).toBeNull();
    });

    it("does not call onPress when loading", () => {
      const onPressMock = jest.fn();

      render(
        <Button testID="button" onPress={onPressMock} loading>
          Loading
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      fireEvent.press(screen.getByTestId("button"));
      expect(onPressMock).not.toHaveBeenCalled();
    });

    it("applies disabled styles when disabled", () => {
      render(
        <Button testID="button" variant="primary" disabled>
          Disabled
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      const button = screen.getByTestId("button");
      expect(button).toHaveStyle({
        backgroundColor: "#A1A1A1", // gray200 for disabled primary
        opacity: 0.6,
      });
    });
  });

  describe("Full Width", () => {
    it("applies full width style when fullWidth is true", () => {
      render(
        <Button testID="button" fullWidth>
          Full Width
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      const button = screen.getByTestId("button");
      expect(button).toHaveStyle({
        width: "100%",
      });
    });
  });

  describe("Accessibility", () => {
    it("has correct accessibility role", () => {
      render(
        <Button testID="button" accessibilityLabel="Submit form">
          Submit
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      const button = screen.getByTestId("button");
      expect(button.props.accessibilityRole).toBe("button");
    });

    it("has correct accessibility state when disabled", () => {
      render(
        <Button testID="button" disabled>
          Disabled
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      const button = screen.getByTestId("button");
      expect(button.props.accessibilityState).toEqual({ disabled: true });
    });

    it("applies custom accessibility label", () => {
      render(
        <Button testID="button" accessibilityLabel="Custom label">
          Button
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      const button = screen.getByTestId("button");
      expect(button.props.accessibilityLabel).toBe("Custom label");
    });
  });

  describe("Custom Styles", () => {
    it("applies custom container styles", () => {
      render(
        <Button testID="button" style={{ marginTop: 20 }}>
          Styled
        </Button>,
        {
          wrapper: TestAppWrapper,
        }
      );

      const button = screen.getByTestId("button");
      expect(button).toHaveStyle({
        marginTop: 20,
      });
    });
  });
});
