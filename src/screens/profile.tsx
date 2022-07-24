import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const Profile: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
