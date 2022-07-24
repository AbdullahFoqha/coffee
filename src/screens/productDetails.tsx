import React, { useEffect, useState } from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import type { RouteProp } from "@react-navigation/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Coffee from "../models/coffee";
import Screens from "../config/navigations";
import { RoutesParamList } from "../navigations/mainNavigation";
import AppIcon from "../components/common/appIcon";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/common/appText";
import { nodeFromRef, SharedElement } from "react-native-shared-element";
import CoffeeBean from "../../assets/coffee-beans.svg";
import Flames from "../../assets/flames.svg";
import Drops from "../../assets/drops.svg";
import BackArrow from "../../assets/back-arrow.svg";
import { LinearGradient } from "expo-linear-gradient";
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from "expo-status-bar";

type DetailsScreenRouteProp = RouteProp<RoutesParamList, Screens.DETAILS>;

const ProductDetails: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const navigation = useNavigation();

  const [coffee, setCoffee] = useState<Coffee>({
    description: "",
    favorite: false,
    imageURL: undefined,
    price: 0,
    rating: 0,
    subTitle: "",
    title: "",
  });

  useEffect(() => setCoffee(route.params.coffee), []);

  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    return () => {
      StatusBar.setBarStyle("dark-content");
    };
  });

  const onBackPress = () => {
    navigation.goBack();
  };

  let endAncestor;
  let endNode;
  return (
    <View style={styles.container}>
      <View
        style={styles.imageContainer}
        ref={(ref) => (endAncestor = nodeFromRef(ref))}
      >
        <SharedElement onNode={(node) => (endNode = node)}>
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={{
              zIndex: 2,
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 200,
            }}
          />
          <Image
            source={{ uri: coffee?.imageURL }}
            resizeMode={"cover"}
            style={styles.image}
          />
        </SharedElement>
      </View>

      <AppIcon
        onPress={onBackPress}
        Icon={<BackArrow fill={colors.textPrimary} width={20} height={20} />}
        style={[styles.backButton, styles.headerButton]}
      />

      <AppIcon
        Icon={
          <AntDesign name={"hearto"} size={15} color={colors.textPrimary} />
        }
        style={[styles.favoriteButton, styles.headerButton]}
      />

      <View style={styles.contentArea}>
        <View style={styles.imageContent}>
          <View>
            <AppText style={styles.title}>{coffee.title}</AppText>
            <AppText style={styles.subTitle}>{coffee.subTitle}</AppText>
          </View>
          <View style={styles.ratingContainer}>
            <MaterialCommunityIcons
              name={"star"}
              color={colors.white}
              size={15}
            />
            <AppText style={styles.rating}>{coffee.rating}</AppText>
          </View>
        </View>

        <View style={styles.bottomArea}>
          <View style={styles.tagContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CoffeeBean height={20} width={20} fill={colors.accent} />
              <Text style={{ marginLeft: 5, fontSize: 18 }}>Coffee</Text>
            </View>

            <View
              style={{
                width: 1,
                height: "100%",
                backgroundColor: colors.textPrimary,
                opacity: 0.5,
              }}
            />

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Drops height={15} width={15} fill={colors.accent} />
              <Text style={{ marginLeft: 5, fontSize: 18 }}>Chocolate</Text>
            </View>

            <View
              style={{
                width: 1,
                height: "100%",
                backgroundColor: colors.textPrimary,
                opacity: 0.5,
              }}
            />

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Flames height={20} width={20} fill={colors.accent} />
              <Text style={{ marginLeft: 5, fontSize: 18 }}>
                Medium roasted
              </Text>
            </View>
          </View>

          <View style={{ marginVertical: 20 }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: colors.textPrimary,
                marginTop: 5,
              }}
            >
              Coffee Size
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 35,
                  paddingVertical: 15,
                  backgroundColor: colors.primary,
                  borderRadius: 70,
                }}
              >
                <Text style={{ fontSize: 20, color: colors.white }}>Small</Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 35,
                  paddingVertical: 15,
                  backgroundColor: colors.white,
                  borderRadius: 70,
                }}
              >
                <Text style={{ fontSize: 20, color: colors.textPrimary }}>
                  Medium
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 35,
                  paddingVertical: 15,
                  backgroundColor: colors.white,
                  borderRadius: 70,
                }}
              >
                <Text style={{ fontSize: 20, color: colors.textPrimary }}>
                  Large
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: colors.textPrimary,
                marginTop: 5,
              }}
            >
              About
            </Text>

            <Text numberOfLines={3} style={{ lineHeight: 25 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              adipisci aliquid aspernatur debitis delectus ducimus earum eius
              error et exercitationem explicabo fugiat fugit incidunt iste
              itaque iure, laboriosam laudantium maiores modi nisi numquam odit
              quam qui quidem, quos recusandae reiciendis repellendus
              reprehenderit sapiente soluta tempore vitae voluptas voluptatem.
              Incidunt, voluptatum.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerButton: {
    position: "absolute",
    top: 44,
    padding: 12,
    backgroundColor: colors.white,
  },
  backButton: {
    left: 20,
  },
  favoriteButton: {
    right: 20,
  },
  imageContainer: {
    height: "50%",
  },
  contentArea: {
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    height: "60%",
    width: "100%",
    zIndex: 1,
    backgroundColor: colors.bg,
  },
  imageContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    height: 80,
    width: "100%",
    paddingHorizontal: 20,
    marginTop: -60,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.white,
  },
  image: {
    height: "100%",
    justifyContent: "flex-end",
  },
  rating: {
    color: colors.white,
    marginLeft: 5,
    fontWeight: "bold",
  },
  ratingContainer: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.accent,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  bottomArea: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.bg,
    borderRadius: 40,
    marginTop: 15,
  },
  tagContainer: {
    flexDirection: "row",
    backgroundColor: colors.bgSecondary,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "space-around",
  },
  subTitle: { color: colors.white },
});

export default ProductDetails;
