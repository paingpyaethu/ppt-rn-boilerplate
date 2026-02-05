import { fireEvent, render, screen } from "@testing-library/react-native";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import TestAppWrapper from "@/tests/TestAppWrapper";
import { TextInput } from "@/components/atoms";

interface TestFormWrapperProps {
  children: (props: {
    control: ReturnType<typeof useForm>["control"];
  }) => React.ReactNode;
  schema?: z.ZodSchema;
  defaultValues?: Record<string, unknown>;
}

function TestFormWrapper({
  children,
  schema,
  defaultValues = {},
}: TestFormWrapperProps) {
  const { control } = useForm({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
    mode: "onTouched",
  });

  return <TestAppWrapper>{children({ control })}</TestAppWrapper>;
}

describe("TextInput", () => {
  it("renders with label, placeholder, icons, styles and handles text change", () => {
    const { rerender } = render(
      <TestFormWrapper defaultValues={{ email: "" }}>
        {({ control }) => (
          <TextInput
            containerStyle={{ marginTop: 10 }}
            control={control}
            inputContainerStyle={{ padding: 5 }}
            inputStyle={{ fontSize: 16 }}
            label="Email"
            leftElement={<View testID="left-icon" />}
            name="email"
            placeholder="Enter email"
            rightElement={<View testID="right-icon" />}
            testID="email-input"
            variant="filled"
          />
        )}
      </TestFormWrapper>
    );

    expect(screen.getByTestId("email-input")).toBeTruthy();
    expect(screen.getByTestId("email-input-label")).toBeTruthy();
    expect(screen.getByTestId("email-input-left-element")).toBeTruthy();
    expect(screen.getByTestId("email-input-right-element")).toBeTruthy();
    expect(screen.getByTestId("email-input")).toHaveStyle({ marginTop: 10 });

    const input = screen.getByTestId("email-input-input");
    expect(input.props.accessibilityLabel).toBe("Email");

    fireEvent.changeText(input, "test@example.com");
    expect(input.props.value).toBe("test@example.com");

    // Test without label - uses placeholder as accessibilityLabel
    rerender(
      <TestFormWrapper defaultValues={{ email: "" }}>
        {({ control }) => (
          <TextInput
            control={control}
            name="email"
            placeholder="Enter email"
            testID="email-input"
          />
        )}
      </TestFormWrapper>
    );

    expect(screen.queryByTestId("email-input-label")).toBeNull();
    expect(screen.queryByTestId("email-input-left-element")).toBeNull();
    expect(screen.queryByTestId("email-input-right-element")).toBeNull();
    expect(screen.getByTestId("email-input-input").props.accessibilityLabel).toBe(
      "Enter email"
    );
  });

  it("toggles password visibility when secureTextEntry is enabled", () => {
    render(
      <TestFormWrapper defaultValues={{ password: "secret123" }}>
        {({ control }) => (
          <TextInput
            control={control}
            name="password"
            placeholder="Password"
            secureTextEntry
            testID="password-input"
          />
        )}
      </TestFormWrapper>
    );

    const toggleButton = screen.getByTestId("password-input-password-toggle");
    const input = screen.getByTestId("password-input-input");

    // Initially secure
    expect(toggleButton.props.accessibilityLabel).toBe("Hide password");
    expect(input.props.secureTextEntry).toBe(true);

    // Toggle to show password
    fireEvent.press(toggleButton);
    expect(toggleButton.props.accessibilityLabel).toBe("Show password");
    expect(input.props.secureTextEntry).toBe(false);

    // Toggle back to hide
    fireEvent.press(toggleButton);
    expect(toggleButton.props.accessibilityLabel).toBe("Hide password");
    expect(input.props.secureTextEntry).toBe(true);
  });

  it("handles disabled state and shows helper text or error appropriately", () => {
    const emailSchema = z.object({
      email: z.string().min(1, "Email is required"),
    });

    const { rerender } = render(
      <TestFormWrapper defaultValues={{ email: "" }}>
        {({ control }) => (
          <TextInput
            control={control}
            disabled
            helperText="We'll never share your email"
            name="email"
            testID="email-input"
          />
        )}
      </TestFormWrapper>
    );

    const input = screen.getByTestId("email-input-input");
    expect(input.props.editable).toBe(false);
    expect(input.props.accessibilityState).toEqual({ disabled: true });

    // Helper text shows when no error
    expect(screen.getByTestId("email-input-helper")).toBeTruthy();
    expect(screen.queryByTestId("email-input-error")).toBeNull();

    // Test with validation error
    rerender(
      <TestFormWrapper schema={emailSchema} defaultValues={{ email: "" }}>
        {({ control }) => (
          <TextInput
            control={control}
            helperText="We'll never share your email"
            name="email"
            testID="email-input"
          />
        )}
      </TestFormWrapper>
    );

    // Trigger validation by blurring
    fireEvent(screen.getByTestId("email-input-input"), "blur");
  });
});
