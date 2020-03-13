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
import { Glass as producto } from "../screens/glass";
export default function Product(props) {
  const { glasses, isLoading, navigation } = props;
  return (
    <View style={{ marginTop: 40 }}>
      {glasses ? (
        <FlatList
          data={glasses}
          renderItem={glass => <Glass glass={glass} navigation={navigation} />}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={8}
          ListFooterComponent={<FooterList isLoading={isLoading}></FooterList>}
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
  const { glass, navigation } = props;
  const { Referencia, Precio, img1, Coleccion, Color } = glass.item;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("producto", { glass: glass.item })}
    >
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

function FooterList(props) {
  const { isLoading } = props;
  if (isLoading) {
    return (
      <View style={styles.loadingGlasses}>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  } else {
    return (
      <View styles={styles.notFoundGlasses}>
        <Text> Cargando colecciones</Text>
      </View>
    );
  }
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
  },
  loaderGlasses: {
    marginTop: 10,
    marginBottom: 10
  }
});
