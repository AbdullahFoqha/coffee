import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppIcon from "./common/appIcon";
import { Ionicons } from "@expo/vector-icons";
import SettingIcon from "../../assets/settings.svg";

interface Props {}

const HomeSearch: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="md-search-outline"
        size={24}
        color={colors.iconPrimary}
        style={{ marginLeft: 10 }}
      />
      <TextInput
        style={{ marginLeft: 15, flexGrow: 1, fontSize: 18 }}
        placeholder="Search Coffee..."
      />
      <AppIcon
        Icon={<SettingIcon fill={colors.white} width={20} height={20} />}
        style={{ backgroundColor: colors.accent }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 20,
    width: "90%",
    padding: 10,
    borderRadius: 30,
    backgroundColor: colors.bgSecondary,
    alignItems: "center",
    alignSelf: "center",
  },
});

export default HomeSearch;
