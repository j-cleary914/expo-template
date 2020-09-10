import React from "react";
import { View } from "react-native";

import RootNavigator from "./src/navigation/root-navigator";

import * as Font from "expo-font";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTerminal } from "@fortawesome/pro-solid-svg-icons";

library.add(faTerminal);

export default function App() {
  const [fontLoaded] = Font.useFonts({
    Poppins: require("./src/assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./src/assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <View style={{ flex: 1, backgroundColor: "pink" }}></View>;
  }

  return <RootNavigator />;
}
