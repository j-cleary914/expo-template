import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./auth-navigator";
import AppNavigator from "./app-navigator";

export default RootNavigator = () => {
  const loggedIn = true;

  return (
    <NavigationContainer>
      {loggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
