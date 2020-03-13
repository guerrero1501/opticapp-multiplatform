import React from "react";
import { View, Text } from "react-native";

export default function Glass({ props, route }) {
  const { glass } = route.params;
  console.log(glass);
  return (
    <View>
      <Text>hola</Text>
    </View>
  );
}
