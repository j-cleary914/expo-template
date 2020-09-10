import React from "react";
import RootNavigator from "./src/navigation/root-navigator";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTerminal } from "@fortawesome/pro-solid-svg-icons";

library.add(faTerminal);

export default function App() {
  return <RootNavigator />;
}
