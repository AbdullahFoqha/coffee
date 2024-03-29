import React, { Fragment } from "react";
import { Pressable, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./appText";
import colors from "../../config/colors";
import Svg from "react-native-svg/lib/typescript";

interface Props {
  Icon: any;
  title?: string;
  titleStyle?: TextStyle;
  id?: number;
  style?: ViewStyle | Array<ViewStyle>;
  onPress?: (id: number) => void;
}

const AppIcon: React.FC<Props> = ({
  Icon,
  title,
  style,
  onPress,
  id,
  titleStyle,
}) => {
  return (
    <Pressable
      onPress={() => (onPress ? onPress(id!) : undefined)}
      style={[styles.container, style]}
    >
      <Fragment>
        {Icon}
        {title && (
          <AppText
            textProps={{ maxFontSizeMultiplier: 1.2 }}
            style={[styles.title, titleStyle!!]}
          >
            {title}
          </AppText>
        )}
      </Fragment>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: colors.primary,
    alignItems: "center",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: colors.textPrimary,
    shadowOpacity: 0.2,
  },
  title: {
    color: colors.white,
    fontWeight: "500",
    marginLeft: 5,
    fontSize: 15,
  },
});

export default AppIcon;
