import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Card, Button } from "react-native-elements";
export default function Product(props) {
  const { glasses, isLoading, navigation } = props;
  return (
    <View style={{ marginTop: 40 }}>
      {glasses ? (
        <FlatList
          data={glasses}
          renderItem={(glass) => (
            <Glass glass={glass} navigation={navigation} />
          )}
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
    <Card
      image={{
        uri: img1 ? img1 : "https://gph.is/1XRTmuh",
      }}
      imageProps={{ resizeMode: "cover" }}
    >
      <Text style={{ marginBottom: 10, marginTop: 20 }} h2>
        {Referencia}
      </Text>
      <Text style={styles.price} h4>
        {Precio}
      </Text>
      <Text h6 style={styles.description}>
        {Coleccion} {Color}
      </Text>
      <Button
        type="clear"
        title="Ver detalles"
        onPress={() => navigation.navigate("producto", { glass: glass.item })}
      />
    </Card>
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
    alignItems: "center",
  },
  viewGlass: {
    flexDirection: "row",
    margin: 10,
  },
  viewGlassImage: {
    marginRight: 15,
  },
  imageGlass: {
    width: 170,
    height: 170,
  },
  glassName: {
    fontWeight: "bold",
  },

  glassColeccion: {
    paddingTop: 2,
    color: "grey",
  },
  loaderGlasses: {
    marginTop: 10,
    marginBottom: 10,
  },
  name: {
    color: "#5a647d",
    fontWeight: "bold",
    fontSize: 30,
  },
  price: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 10,
    color: "#c1c4cd",
  },
});
