import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Product from "../components/product";

export default function Inventario({ navigation, tipo }) {
  const [typeGlass, settypeGlass] = useState(tipo);
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (Loading) {
      console.log(typeGlass);
      fetch(`https://www.softmild.com/api/v1/Opticapp/Inventario/sol`)
        .then(res => res.json())
        .then(rta => {
          console.log({ rta });
          setData(rta);
          setLoading(false);
        });
    }
  }, [data, Loading]);

  return <Product isLoading={Loading} glasses={data}></Product>;
}
