import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Product from "../components/product";

export default function Inventario({ navigation, route }) {
  const { tipo } = route.params;
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (Loading) {
      fetch(`https://www.softmild.com/api/v1/Opticapp/Inventario/${tipo}`)
        .then(res => res.json())
        .then(rta => {
          setData(rta);
          setLoading(false);
        });
    }
  }, [data, Loading]);

  return (
    <Product
      isLoading={Loading}
      glasses={data}
      navigation={navigation}
    ></Product>
  );
}
