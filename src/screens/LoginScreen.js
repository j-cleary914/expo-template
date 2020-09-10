import React from "react";
import { View, Text, Button } from "react-native";

export default LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>this is the login screen</Text>
      <Button
        title="Log Me In !!"
        // onPress={() => navigation.push("Details")}
      />
    </View>
  );
};
