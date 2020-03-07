import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./app/components/loading";
import Home from "./app/screens/home";
import Catalog from "./app/screens/catalog";
import Navigation from "./app/navigations/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./app/navigations/StackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
