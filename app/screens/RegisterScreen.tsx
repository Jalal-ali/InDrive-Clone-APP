import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import { theme } from "../core/theme.js";
import { Auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
import { Link } from "expo-router";


export default function RegisterScreen(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [user, setUser] = useState<User | null>(null);

  const SignUp = (): void => {
    createUserWithEmailAndPassword(Auth, email, password)
    .then((userCredential) => {
      // Signed up 
      // setUser(userCredential.user);
      const user = userCredential.user;
      Alert.alert("Registered Successfully!");

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert("Something Went Wrong! Try Again. :]");
      // ..
    });
  };

  return (
    <Background>
      <Logo />
      <Header>Create Your Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name}
        onChangeText={(text: string) => setName(text)}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={(text: string) => setEmail(text)}
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        secureTextEntry
      />
      {/* Sign-up button */}
      <TouchableOpacity onPress={SignUp} style={styles.button}>
        <Text style={styles.text}>Create</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <Text>I already have an account!</Text>
      </View>
      <View style={styles.row}>
      <TouchableOpacity>
        <Link  style={styles.link} href="/screens/LoginScreen">Login!</Link>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.link,
  },
  button: {
    width: 300,
    padding: 15,
    backgroundColor: "#c1f21d",
    borderRadius: 20,
    textAlign: "center",
    alignItems: "center",
    margin: 5,
  },
  text: {
    color: "#000000",
    fontWeight: "bold",
  },
});
