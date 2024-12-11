import React from "react";
import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Button as PaperButton, ButtonProps } from "react-native-paper";

import { theme } from "../core/theme";

type CustomButtonProps = ButtonProps & {
  bg?: string; // Background color for the button
  color?: string; // Text color for the button
  style?: ViewStyle; // Additional styles for the button
};

export default function Button({ mode, bg, color, style, ...props }: CustomButtonProps) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === "outlined" && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      buttonColor={bg}
      textColor={color}
      mode={mode}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
  } as ViewStyle,
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  } as TextStyle,
});
