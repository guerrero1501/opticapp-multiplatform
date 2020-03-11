import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/drawable-xxxhdpi/mainactimg.png")}
    >
      <View style={styles.buttonFormula}>
        <TouchableOpacity
          style={styles.touchableCatalog}
          onPress={() => navigation.navigate("Inventario", { tipo: "sol" })}
        >
          <Image
            source={require("../../assets/btmain1.png")}
            style={styles.imageCatalog}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableFormula}
          onPress={() => navigation.navigate("Inventario", { tipo: "sol" })}
        >
          <Image
            source={require("../../assets/btmain2.png")}
            style={styles.imageCatalog}
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
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  buttonFormula: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonCatalogo: {
    marginTop: 400
  },
  imageCatalog: {
    resizeMode: "center"
  },
  imageFormula: {
    resizeMode: "center"
  },
  touchableCatalog: {
    width: 150,
    height: 45,
    padding: 30,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  touchableFormula: {
    width: 150,
    height: 45,
    padding: 30,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});
