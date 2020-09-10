import LoginScreen from "../screens/LoginScreen";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

export default AuthNavigator = () => (
  <AuthStack.Navigator initialRouteName="Home">
    <AuthStack.Screen name="Login" component={LoginScreen} />
  </AuthStack.Navigator>
);
