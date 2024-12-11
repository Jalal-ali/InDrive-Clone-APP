import React from "react";
import { StyleSheet, TextStyle } from "react-native";
import { Text, TextProps } from "react-native-paper";

type ParagraphProps = React.ComponentProps<typeof Text> & {
  style?: TextStyle;
};

export default function Paragraph(props: ParagraphProps) {
  return <Text style={[styles.text, props.style]} {...props} />;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 12,
  } as TextStyle,
});
