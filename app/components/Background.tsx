import React, { ReactNode } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  ViewStyle,
  ImageStyle,
} from "react-native";

import { theme } from "../core/theme";

type BackgroundProps = {
  children: ReactNode;
};

export default function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground
      source={require("../../assets/items/dot.png")}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.myColor,
  } as ViewStyle,
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
});
