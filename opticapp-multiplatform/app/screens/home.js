import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";

export default function Home({ navigation }) {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      //We are using online image to set background
      source={require("../../assets/drawable-xxxhdpi/mainactimg.png")}
    >
      <View style={styles.buttonCatalogo}>
        <Button
          title="Go to Catalogo"
          onPress={() => navigation.navigate("Catalog")}
        />
      </View>
      <View style={styles.buttonFormula}>
        <Button
          title="Formula"
          onPress={() => navigation.navigate("Inventario", { tipo: "sol" })}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonFormula: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 80
  },
  buttonCatalogo: {
    flex: 5,
    justifyContent: "flex-end",
    marginBottom: 0
  }
});
