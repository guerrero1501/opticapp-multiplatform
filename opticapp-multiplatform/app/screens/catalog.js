import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");

export default function Catalog({ navigation }) {
  return (
    <ImageBackground
      style={{ ...styles.container }}
      source={require("../../assets/drawable-xxxhdpi/catalogoact.png")}
    >
      <View style={{ flex: 70 }} />
      <TouchableOpacity
        style={styles.touchableCatalog}
        onPress={() => navigation.navigate("Inventario", { tipo: "optica" })}
      >
        <Image
          resizeMode="stretch"
          source={require("../../assets/catoft.png")}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.touchableFormula }}
        onPress={() => navigation.navigate("Inventario", { tipo: "sol" })}
      >
        <Image
          source={require("../../assets/catsol.png")}
          style={{ ...styles.imageStyle }}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: "stretch",
    flex: 1,
    justifyContent: "flex-end",
  },
  imageStyle: {
    resizeMode: "center",
  },
  touchableCatalog: {
    flex: 15,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  touchableFormula: {
    flex: 15,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
