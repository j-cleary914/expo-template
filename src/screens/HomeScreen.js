import React from "react";
import { View, Text, Button } from "react-native";

export default HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontFamily: "Poppins", fontSize: 30 }}>
        This is Poppins Font
      </Text>
      <Text style={{ fontSize: 30 }}>This is Regular Font</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
    </View>
  );
};
