import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import FitImage from "react-native-fit-image";
const { width, height } = Dimensions.get("window");

export default function Catalog({ navigation }) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/drawable-xxxhdpi/catalogoact.png")}
    >
      <View style={styles.buttonFormula}>
        <TouchableOpacity
          style={styles.touchableCatalog}
          onPress={() => navigation.navigate("Inventario", { tipo: "optica" })}
        >
          <Image
            resizeMode="stretch"
            source={require("../../assets/catoft.png")}
            style={styles.imageCatalog}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableFormula}
          onPress={() => navigation.navigate("Inventario", { tipo: "sol" })}
        >
          <Image
            resizeMode="cover"
            source={require("../../assets/catsol.png")}
            style={{ ...styles.imageCatalog }}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: "stretch",
    justifyContent: "center",
    flex: 5,
  },
  buttonFormula: {
    flex: 2.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageCatalog: {
    resizeMode: "center",
  },
  buttonCatalogo: {
    flex: 2.5,
    marginTop: 400,
  },
  imageFormula: {
    resizeMode: "center",
  },
  touchableCatalog: {
    width: width * 0.3,
    height: height * 0.25,
    padding: 30,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  touchableFormula: {
    width: 150,
    height: 45,
    padding: 30,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
