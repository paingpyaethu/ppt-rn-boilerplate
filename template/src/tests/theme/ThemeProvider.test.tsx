import { fireEvent, render, screen } from "@testing-library/react-native";
import * as RN from "react-native";
import { Button, Text, View } from "react-native";
import { createMMKV, MMKV } from "react-native-mmkv";

import { ThemeProvider, useTheme } from "@/theme";

function TestChildComponent() {
  const { changeTheme, variant } = useTheme();
  return (
    <View>
      <Text testID="theme-variant">{variant}</Text>
      <Button
        onPress={() => changeTheme("dark")}
        testID="change-btn"
        title="button"
      />
    </View>
  );
}

function BadComponent() {
  useTheme();
  return null;
}

describe("ThemeProvider", () => {
  let storage: MMKV;
  let useColorSchemeSpy: jest.SpyInstance;

  beforeEach(() => {
    storage = createMMKV();
    storage.clearAll();
    useColorSchemeSpy = jest
      .spyOn(RN, "useColorScheme")
      .mockReturnValue("light");
  });

  afterEach(() => {
    storage.clearAll();
    useColorSchemeSpy.mockRestore();
  });

  it("defaults to system/light theme and supports changeTheme", () => {
    render(
      <ThemeProvider storage={storage}>
        <TestChildComponent />
      </ThemeProvider>,
    );

    expect(screen.getByText("default")).toBeTruthy();

    fireEvent.press(screen.getByTestId("change-btn"));
    expect(screen.getByText("dark")).toBeTruthy();

    // Covers default children = false branch
    expect(render(<ThemeProvider storage={storage} />).toJSON()).toBeNull();
  });

  it("resolves system preference to dark when system color scheme is dark", () => {
    useColorSchemeSpy.mockReturnValue("dark");
    storage.set("theme", "system");

    render(
      <ThemeProvider storage={storage}>
        <TestChildComponent />
      </ThemeProvider>,
    );

    expect(screen.getByText("dark")).toBeTruthy();
  });

  it("throws when useTheme is used outside of ThemeProvider", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation();

    expect(() => render(<BadComponent />)).toThrow(
      "useTheme must be used within a ThemeProvider",
    );

    consoleSpy.mockRestore();
  });
});
