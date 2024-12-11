import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { Title } from "react-native-paper";

export default function Logo() {
  return (
    <>
    <Image
      source={require("../../assets/images/indriver.jpg")}
      style={styles.image}
      />
      <Text style={styles.title}>inDrive</Text>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
    marginBottom: 20,
    borderRadius : 30,
  },
  title : {
    fontWeight : 'bold',
    fontSize : 40 ,
    fontFamily : 'mono',
    marginBottom : 30
  }
});
