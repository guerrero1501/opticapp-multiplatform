import React from "react";
import Inventario from "../screens/inventario";
import Home from "../screens/home";
import Catalog from "../screens/catalog";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Inventario" component={Inventario} />
      <Stack.Screen name="Catalog" component={Catalog} />
    </Stack.Navigator>
  );
}
