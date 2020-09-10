import React from "react";
import { View, Text, Button } from "react-native";

export default DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screenoooo</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.push("Home")}
      />
    </View>
  );
};
