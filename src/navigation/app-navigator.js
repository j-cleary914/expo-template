import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetialsScreen";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainStack = createStackNavigator();
const MainStackNavigator = () => (
  <MainStack.Navigator initialRouteName="Home">
    <MainStack.Screen name="Home" component={HomeScreen} />
    <MainStack.Screen name="Details" component={DetailsScreen} />
  </MainStack.Navigator>
);

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Main"
      component={MainStackNavigator}
      options={{
        tabBarIcon: () => (
          <FontAwesomeIcon icon={["fas", "terminal"]} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Other"
      component={MainStackNavigator}
      options={{
        tabBarIcon: () => (
          <FontAwesomeIcon icon={["fas", "terminal"]} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);
