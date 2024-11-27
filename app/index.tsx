import React from "react";

import Background from "@/app/components/Background";
import Logo from "@/app/components/Logo";
import Header from "@/app/components/Header";
import Button from "@/app/components/Button";
import Paragraph from "@/app/components/Paragraph";
import { Link, useNavigation } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { theme } from "@/app/core/theme";

export default function index() {
    const navigate = useNavigation()
  return (
    <Background>
      <Logo />
      <Header>Welcome to inDrive</Header>
      <Paragraph>
        A starter app template for React Native Expo, featuring a ready-to-use
        login screen.
      </Paragraph>
      <Button mode="contained" style={undefined}>
        <Link href="/screens/LoginScreen">Login</Link>
      </Button>
      <Button mode="contained" style={undefined}>
        <Link href="/screens/RegisterScreen">Sign Up</Link>
      </Button>
    </Background>
  );
}
const styles = StyleSheet.create({
    button: {
      width: "100%",
      marginVertical: 10,
      paddingVertical: 2,
    },
    text: {
      fontWeight: "bold",
      fontSize: 15,
      lineHeight: 26,
    },
  });