import React from "react";
import Inventario from "../screens/inventario";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inventario" component={Inventario} />
    </Stack.Navigator>
  );
}
