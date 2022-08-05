import React from "react";
import { Platform, StyleSheet, Text, TextProps, TextStyle } from "react-native";
import colors from "../../config/colors";

interface Props {
  style?: TextStyle | Array<TextStyle>;
  textProps?: TextProps;
}

const AppText: React.FC<Props> = ({ children, style, textProps }) => {
  return (
    <Text {...textProps} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    // fontFamily: Platform.OS === "android" ? "Roboto" : "Lao Sangam MN",
    color: colors.textPrimary,
  },
});

export default AppText;
