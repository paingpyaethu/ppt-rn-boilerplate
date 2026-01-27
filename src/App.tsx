import React from "react";
import { View, Text } from "react-native";
import Config from "react-native-config";

const App = () => {
  return (
    <View>
      <Text>{Config.APP_ENV ?? "no"}</Text>
    </View>
  );
};

export default App;
