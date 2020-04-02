import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Linking
} from "react-native";
import { Overlay, Button } from "react-native-elements";
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
      fetch(baseUriGet + "/getInit")
        .then(res => res.json())
        .then(rta => {
          console.log(rta);
          {
            Object.keys(rta).map(item => {
              console.log(item);
              let key = item.nomVariable;
              if (key === "publicKeyEpayco") setPublicKeyEpayco(item.valor);
              else if (key === "authToken") setAuthToken(item.valor);
              else if (key === "whatsappDest") setWhatsappDest(item.valor);
              setLoading(false);
            });
          }
        });
    }
  }, [Loading, publicKeyEpayco, authToken, whatsappDest]);
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
            onPress={e => clickEventListener(e)}
          >
            <Text style={styles.shareButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Overlay
        isVisible={isVisible}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        width="auto"
        height="auto"
        onBackdropPress={() => setIsVisible(false)}
      >
        <View style={{ padding: 15 }}>
          <Button
            title="Pagar con ePayco"
            type="outline"
            onPress={() =>
              Linking.openURL(
                `https://www.softmild.com/payment/epayco?monto=${glass.Precio}&descripcion=${glass.nomCompleto}&pk=${publicKeyEpayco}&sku=${glass.Sku}`
              )
            }
          />
        </View>
        <View style={{ padding: 15 }}>
          <Button
            title="Pagar con Coinbase (Cryptos)"
            onPress={() =>
              Linking.openURL(
                `https://www.softmild.com/payment/Cryptopayment?precioCop=${glass.Precio}&descripcion=${glass.nomCompleto}&authToken=${authToken}&sku=${glass.Sku}`
              )
            }
          />
        </View>
        <View style={{ left: "9%" }}>
          <FitImage
            resizeMode="contain"
            source={{
              uri:
                "http://0523aae09f0cadbd79f4-60bf0867add971908d4f26a64519c2aa.r62.cf5.rackcdn.com/btns/epayco/epayco_pago_seguro.png"
            }}
            style={{ width: 200, height: 200, borderRadius: 20 }}
          />
        </View>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    borderRadius: 15,
    width: "97%"
  },
  container: {
    flex: 1,
    marginTop: 30
  },
  productImg: {
    width: 200,
    height: 200
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "bold"
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "blue",
    fontWeight: "bold"
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    color: "#696969"
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3
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
    alignItems: "center"
  },
  contentSize: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20
  },
  separator: {
    height: 2,
    backgroundColor: "#eeeeee",
    marginTop: 20,
    marginHorizontal: 30
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#00BFFF"
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 20
  },
  addToCarContainer: {
    marginHorizontal: 30
  }
});
