import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomCarousel from "../components/carousel";
import { ScrollView } from "react-native-gesture-handler";

export default function Glass({ props, route }) {
  const { glass } = route.params;
  console.log(glass);
  return (
    <ScrollView>
      <CustomCarousel style={styles.carousel} data={glass}></CustomCarousel>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  carousel: {
    marginTop: 40,
    borderRadius: 15,
    width: "97%"
  }
});
