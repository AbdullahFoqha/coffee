import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Coffee from "../models/coffee";
import colors from "../config/colors";
import AppText from "./common/appText";
import AppView from "./common/appView";

interface Props {
  offer: Coffee;
}

const OffersCard: React.FC<Props> = ({ offer }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: offer.imageURL }} style={styles.imageContainer} />
      <AppView style={{ flex: 1 }}>
        <AppView style={styles.tagContainer}>
          <AppText
            textProps={{
              maxFontSizeMultiplier: 1.2,
              ellipsizeMode: "tail",
              numberOfLines: 1,
            }}
            style={styles.tag}
          >
            Discount Sales
          </AppText>
        </AppView>
        <AppText
          textProps={{ maxFontSizeMultiplier: 1.2 }}
          style={styles.description}
        >
          {offer.description}
        </AppText>
      </AppView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 10,
    width: "90%",
    shadowColor: colors.textPrimary,
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    marginVertical: 7,
    borderRadius: 20,
    marginHorizontal: 15,
    alignSelf: "center",
  },
  imageContainer: {
    width: "37%",
    height: 115,
    borderRadius: 20,
    alignSelf: "center",
    marginRight: 10,
  },
  tagContainer: {
    backgroundColor: colors.accent,
    paddingVertical: 3,
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 10,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  tag: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "500",
  },
  description: {
    fontWeight: "bold",
  },
});

export default OffersCard;
