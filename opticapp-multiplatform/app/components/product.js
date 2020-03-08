import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";

export default function Product(props) {
  const { glasses, isLoading } = props;

  return (
    <View>
      {glasses ? (
        <FlatList
          data={glasses}
          renderItem={glass => <Glass glass={glass} />}
          keyExtractor={(item, index) => index.toString()}
          // onEndReached=
        />
      ) : (
        <View style={styles.loadingGlasses}>
          <ActivityIndicator size="large"></ActivityIndicator>
          <Text>Cargando nuevas colecciones</Text>
        </View>
      )}
    </View>
  );
}

function Glass(props) {
  const { glass } = props;
  const { Referencia, Precio, img1, Coleccion, Color } = glass.item;

  console.log(glass);
  return (
    <TouchableOpacity onPress={() => console.log("Ir a las gafas.")}>
      <View style={styles.viewGlass}>
        <View style={styles.viewGlassImage}>
          <Image
            source={{
              uri: img1 ? img1 : "https://gph.is/1XRTmuh"
            }}
            style={styles.imageGlass}
            PlaceholderContent={
              <ActivityIndicator color="fff"></ActivityIndicator>
            }
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.glassName}>{Referencia}</Text>
          <Text style={styles.glassColeccion}>{Coleccion}</Text>
          <Text style={styles.glassColeccion}>{Color}</Text>
          <Text style={styles.glassColeccion}>{Precio}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loadingGlasses: {
    marginTop: 20,
    alignItems: "center"
  },
  viewGlass: {
    flexDirection: "row",
    margin: 10
  },
  viewGlassImage: {
    marginRight: 15
  },
  imageGlass: {
    width: 170,
    height: 170
  },
  glassName: {
    fontWeight: "bold"
  },
  glassColeccion: {
    paddingTop: 2,
    color: "grey"
  }
});
