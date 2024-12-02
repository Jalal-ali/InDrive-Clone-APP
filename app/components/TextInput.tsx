import React from "react";
import { View, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import { TextInput as PaperInput, TextInputProps as PaperInputProps } from "react-native-paper";

import { theme } from "../core/theme";

interface TextInputProps extends PaperInputProps {
  errorText?: string;
  description?: string;
}

export default function TextInput({ errorText, description, ...props }: TextInputProps): JSX.Element {
  return (
    <View style={styles.container}>
      <PaperInput
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        outlineColor={theme.colors.link}
        activeOutlineColor="#1a7300"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 12,
  } as ViewStyle,
  input: {
    backgroundColor: theme.colors.surface,
  } as TextStyle,
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  } as TextStyle,
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  } as TextStyle,
});
