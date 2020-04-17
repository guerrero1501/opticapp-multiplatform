import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Linking,
  Modal,
  TouchableHighlight,
  Alert,
  Image,
} from "react-native";
import { Button } from "react-native-elements";
import CustomCarousel from "../components/carousel";
import FitImage from "react-native-fit-image";

export default function Glass({ props, route }) {
  const { glass } = route.params;
  const [isVisible, setIsVisible] = useState(false);
  console.log(glass);

  const baseUriGet = "https://www.softmild.com/api/v1/Opticapp";
  const [Loading, setLoading] = useState(true);
  const [publicKeyEpayco, setPublicKeyEpayco] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [whatsappDest, setWhatsappDest] = useState("");

  useEffect(() => {
    if (Loading) {
      fetchData();
    }
  }, [Loading, publicKeyEpayco, authToken, whatsappDest]);

  async function fetchData() {
    try {
      let response = await fetch(baseUriGet + "/getvariable");
      let json = await response.json();
      json.map((item) => {
        console.log(item);
        let key = item.nomVariable;
        if (key === "publicKeyEpayco") setPublicKeyEpayco(item.valor);
        else if (key === "authToken") setAuthToken(item.valor);
        else if (key === "whatsappDest") setWhatsappDest(item.valor);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    }
  }

  function clickEventListener(e) {
    e.preventDefault();
    setIsVisible(true);
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <CustomCarousel style={styles.carousel} data={glass}></CustomCarousel>
        </View>
        <View style={{ alignItems: "center", marginHorizontal: 30 }}>
          <Text style={styles.name}>{glass.Referencia}</Text>
          <Text style={styles.price}>$ {glass.Precio}</Text>
          <Text style={styles.description}>
            {glass.nomCompleto}, {glass.Garantia} de Garantia con{" "}
            {glass.Accesorio}
          </Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.addToCarContainer}>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={(e) => clickEventListener(e)}
          >
            <Text style={styles.shareButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isVisible}
          onRequestClose={() => {
            setIsVisible(false);
            // Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{
                  ...styles.openButton,
                  backgroundColor: "white",
                  width: 250,
                  padding: 15,
                }}
                onPress={() =>
                  Linking.openURL(
                    `https://www.softmild.com/payment/epayco?monto=${glass.Precio}&descripcion=${glass.nomCompleto}&pk=${publicKeyEpayco}&sku=${glass.Sku}`
                  )
                }
              >
                <Text style={{ ...styles.textStyle, color: "#2196F3" }}>
                  Pagar con ePayco
                </Text>
              </TouchableOpacity>
              <TouchableHighlight
                style={{
                  ...styles.openButton,
                  backgroundColor: "#2196F3",
                  width: 250,
                  padding: 15,
                }}
                onPress={() =>
                  Linking.openURL(
                    `https://www.softmild.com/payment/Cryptopayment?precioCop=${glass.Precio}&descripcion=${glass.nomCompleto}&authToken=${authToken}&sku=${glass.Sku}`
                  )
                }
              >
                <Text style={styles.textStyle}>
                  Pagar con Coinbase (Cryptos)
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  touchableCatalog: {
    width: 150,
    height: 45,
    padding: 30,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  imageCatalog: {
    resizeMode: "center",
  },
  buttonCatalogo: {
    marginTop: 400,
  },
  imageFormula: {
    resizeMode: "center",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  carousel: {
    borderRadius: 15,
    width: "97%",
  },
  container: {
    flex: 1,
    marginTop: 30,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "bold",
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "blue",
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    color: "#696969",
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: "#778899",
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: "white",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentSize: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: "#eeeeee",
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
});
