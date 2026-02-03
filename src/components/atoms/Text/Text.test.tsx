import React from "react";
import { render } from "@testing-library/react-native";
import { Text } from "./Text";
import ThemeProvider from "@/theme/ThemeProvider/ThemeProvider";

// Mock MMKV
jest.mock("react-native-mmkv", () => ({
  MMKV: jest.fn().mockImplementation(() => ({
    getString: jest.fn(),
    set: jest.fn(),
    delete: jest.fn(),
  })),
}));

// Wrapper component to provide theme context
const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { MMKV } = require("react-native-mmkv");
  const storage = new MMKV();
  return <ThemeProvider storage={storage}>{children}</ThemeProvider>;
};

describe("Text Component", () => {
  it("renders correctly with default props", () => {
    const { getByText } = render(
      <Wrapper>
        <Text>Hello World</Text>
      </Wrapper>
    );

    expect(getByText("Hello World")).toBeTruthy();
  });

  it("renders with custom size", () => {
    const { getByText } = render(
      <Wrapper>
        <Text size="size_24">Large Text</Text>
      </Wrapper>
    );

    const textElement = getByText("Large Text");
    expect(textElement).toBeTruthy();
  });

  it("renders with custom weight", () => {
    const { getByText } = render(
      <Wrapper>
        <Text weight="bold">Bold Text</Text>
      </Wrapper>
    );

    const textElement = getByText("Bold Text");
    expect(textElement).toBeTruthy();
  });

  it("applies text alignment correctly", () => {
    const { getByText } = render(
      <Wrapper>
        <Text align="center">Centered Text</Text>
      </Wrapper>
    );

    const textElement = getByText("Centered Text");
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ textAlign: "center" }),
      ])
    );
  });

  it("applies text transform correctly", () => {
    const { getByText } = render(
      <Wrapper>
        <Text transform="uppercase">uppercase text</Text>
      </Wrapper>
    );

    const textElement = getByText("uppercase text");
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ textTransform: "uppercase" }),
      ])
    );
  });

  it("limits number of lines", () => {
    const { getByText } = render(
      <Wrapper>
        <Text numberOfLines={2}>Long text that should be truncated</Text>
      </Wrapper>
    );

    const textElement = getByText("Long text that should be truncated");
    expect(textElement.props.numberOfLines).toBe(2);
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Wrapper>
        <Text onPress={onPressMock}>Clickable Text</Text>
      </Wrapper>
    );

    const textElement = getByText("Clickable Text");
    textElement.props.onPress();
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("renders with testID", () => {
    const { getByTestId } = render(
      <Wrapper>
        <Text testID="test-text">Test Text</Text>
      </Wrapper>
    );

    expect(getByTestId("test-text")).toBeTruthy();
  });

  it("supports selectable prop", () => {
    const { getByText } = render(
      <Wrapper>
        <Text selectable>Selectable Text</Text>
      </Wrapper>
    );

    const textElement = getByText("Selectable Text");
    expect(textElement.props.selectable).toBe(true);
  });

  it("applies custom styles", () => {
    const customStyle = { marginTop: 10, paddingLeft: 5 };
    const { getByText } = render(
      <Wrapper>
        <Text style={customStyle}>Styled Text</Text>
      </Wrapper>
    );

    const textElement = getByText("Styled Text");
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining(customStyle)])
    );
  });
});
