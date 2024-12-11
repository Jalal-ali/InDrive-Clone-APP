import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Alert } from "react-native";
import { Text } from "react-native-paper";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import { theme } from "../core/theme";
import { Link } from "expo-router";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";

export default function LoginScreen(){
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean | null>(null);

  const login = async (): Promise<void> => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;
      Alert.alert("Login successful", "Welcome back!");
      router.push("/screens/HomeScreen", { relativeToDirectory: true })
    } catch (error: any) {
      const errorMessage = error.message;
      Alert.alert("Login failed", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Background>
      <Logo />
      <Header>Login To Your Account</Header>
      {/* <Text>{email}</Text> */}
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => Alert.alert("Reset Password", "Navigate to Reset Password Screen")}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <Text>You do not have an account yet?</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity>
          <Link style={styles.link} href="/screens/RegisterScreen">Create!</Link>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    color: "#4f4f4f",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontWeight: "500",
    fontSize: 13,
    color: "#4f4f4f",
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
