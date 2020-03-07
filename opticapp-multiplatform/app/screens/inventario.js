import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Product from "../components/product";

export default function Inventario(props) {
  const { tipo } = props;
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (Loading) {
      fetch(`https://www.softmild.com/api/v1/Opticapp/Inventario/optica`)
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
