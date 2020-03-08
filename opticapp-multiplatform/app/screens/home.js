import React from "react";
import { View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Inventario"
        onPress={() => navigation.navigate("Inventario", { tipo: "sol" })}
      />
      <Button
        title="Go to Catalogo"
        onPress={() => navigation.navigate("Catalog")}
      />
    </View>
  );
}
