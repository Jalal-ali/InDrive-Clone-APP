import React from "react";
import { Image, StyleSheet, Text } from "react-native";

export default function Logo() {
  return (
    <>
    <Image
      source={require("../../assets/images/indriveLogo.png")}
      style={styles.image}
    />
    <Text>indrive</Text>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});
