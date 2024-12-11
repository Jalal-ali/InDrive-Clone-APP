import React from "react";

import Background from "@/app/components/Background";
import Logo from "@/app/components/Logo";
import Header from "@/app/components/Header";
// import Button from "@/app/components/Button";
import Paragraph from "@/app/components/Paragraph";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";



export default function Index(): JSX.Element {

  return (
    <Background>
      <Logo />
      {/* <Text style={styles.text}>Welcome to inDrive</Text> */}
      <Paragraph>
      Welcome to our app! Let’s begin your journey by verifying your account for a seamless experience.
      </Paragraph>
      <Link style={styles.button} href="/screens/LoginScreen">
      <Text style={styles.text}>Login</Text></Link>

      <Link style={styles.button} href="/screens/RegisterScreen">
      <Text style={styles.text}>Sign Up</Text></Link>
    </Background>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 300,
    padding: 15,
    backgroundColor: '#c1f21d',
    borderRadius: 20,
    textAlign : 'center',
    alignItems: 'center',
    margin: 5
  },
  text: {
    color: '#000000',
    fontWeight: 'bold',
  },
});