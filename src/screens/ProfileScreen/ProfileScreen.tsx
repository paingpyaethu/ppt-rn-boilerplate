import React from "react";
import { Screen } from "@/components/template";
import { ThemedText } from "@/components/atoms";

const ProfileScreen = () => {
  return (
    <Screen safeAreaEdges={["top", "bottom"]}>
      <ThemedText text="ProfileScreen" />
    </Screen>
  );
};

export default ProfileScreen;
