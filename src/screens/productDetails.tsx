import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { RouteProp } from "@react-navigation/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Coffee from "../models/coffee";
import Screens from "../config/navigations";
import { RoutesParamList } from "../navigations/mainNavigation";
import AppIcon from "../components/common/appIcon";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/common/appText";
import CoffeeBean from "../../assets/coffee-beans.svg";
import Flames from "../../assets/flames.svg";
import Drops from "../../assets/drops.svg";
import BackArrow from "../../assets/back-arrow.svg";
import { LinearGradient } from "expo-linear-gradient";
import { SharedElement } from "react-navigation-shared-element";

type DetailsScreenRouteProp = RouteProp<RoutesParamList, Screens.DETAILS>;

const ProductDetails: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const navigation = useNavigation();

  const [coffee, setCoffee] = useState<Coffee>({
    id: "",
    description: "",
    favorite: false,
    imageURL: undefined,
    price: 0,
    rating: 0,
    subTitle: "",
    title: "",
  });

  const [numberOfLines, setNumberOfLines] = useState(3);
  const [selectedSize, setSelectedSize] = useState(0);

  useEffect(() => {
    setCoffee(route.params.coffee);
  }, []);

  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    getIn();
    return () => {
      StatusBar.setBarStyle("dark-content");
    };
  });

  const onBackPress = () => {
    navigation.goBack();
  };

  const handleSizeChange = (size: number) => setSelectedSize(size);

  const translateYAnim = new Animated.ValueXY({
    x: 0,
    y: Dimensions.get("window").height,
  });

  const getIn = () => {
    Animated.timing(translateYAnim, {
      toValue: {
        y: Dimensions.get("window").height * 0.4,
        x: 0,
      },
      duration: 750,
      isInteraction: false,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
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
        <SharedElement id={coffee.id}>
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
      <Animated.View style={[translateYAnim.getLayout(), styles.contentArea]}>
        <View style={styles.imageContent}>
          <View>
            <AppText
              textProps={{ maxFontSizeMultiplier: 1.2 }}
              style={styles.title}
            >
              {coffee.title}
            </AppText>
            <AppText
              textProps={{ maxFontSizeMultiplier: 1.2 }}
              style={styles.subTitle}
            >
              {coffee.subTitle}
            </AppText>
          </View>
          <View style={styles.ratingContainer}>
            <MaterialCommunityIcons
              name={"star"}
              color={colors.white}
              size={15}
            />
            <AppText
              textProps={{ maxFontSizeMultiplier: 1.2 }}
              style={styles.rating}
            >
              {coffee.rating}
            </AppText>
          </View>
        </View>

        <ScrollView style={styles.bottomArea}>
          <View style={styles.tagContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CoffeeBean height={20} width={20} fill={colors.accent} />
              <Text
                maxFontSizeMultiplier={1.2}
                style={{ marginLeft: 5, fontSize: 15 }}
              >
                Coffee
              </Text>
            </View>

            <View style={styles.tagDivider} />

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Drops height={15} width={15} fill={colors.accent} />
              <Text
                maxFontSizeMultiplier={1.2}
                style={{ marginLeft: 5, fontSize: 15 }}
              >
                Chocolate
              </Text>
            </View>

            <View style={styles.tagDivider} />

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Flames height={20} width={20} fill={colors.accent} />
              <Text
                maxFontSizeMultiplier={1.2}
                style={{ marginLeft: 5, fontSize: 15 }}
              >
                Medium roasted
              </Text>
            </View>
          </View>

          <View style={{ marginVertical: 20 }}>
            <Text style={styles.detailsHeaders} maxFontSizeMultiplier={1.2}>
              Coffee Size
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Pressable onPress={() => handleSizeChange(0)}>
                <View
                  style={[
                    styles.coffeeSize,
                    selectedSize == 0
                      ? {
                          backgroundColor: colors.primary,
                        }
                      : {},
                  ]}
                >
                  <Text
                    maxFontSizeMultiplier={1.2}
                    style={[
                      { fontSize: 15, color: colors.textPrimary },
                      selectedSize == 0
                        ? {
                            color: colors.white,
                          }
                        : {},
                    ]}
                  >
                    Small
                  </Text>
                </View>
              </Pressable>

              <Pressable onPress={() => handleSizeChange(1)}>
                <View
                  style={[
                    styles.coffeeSize,
                    selectedSize == 1
                      ? {
                          backgroundColor: colors.primary,
                        }
                      : {},
                  ]}
                >
                  <Text
                    maxFontSizeMultiplier={1.2}
                    style={[
                      { fontSize: 15, color: colors.textPrimary },
                      selectedSize == 1
                        ? {
                            color: colors.white,
                          }
                        : {},
                    ]}
                  >
                    Medium
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => handleSizeChange(2)}>
                <View
                  style={[
                    styles.coffeeSize,
                    selectedSize == 2
                      ? {
                          backgroundColor: colors.primary,
                        }
                      : {},
                  ]}
                >
                  <Text
                    maxFontSizeMultiplier={1.2}
                    style={[
                      { fontSize: 15, color: colors.textPrimary },
                      selectedSize == 2
                        ? {
                            color: colors.white,
                          }
                        : {},
                    ]}
                  >
                    Large
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>

          <View>
            <Text maxFontSizeMultiplier={1.2} style={styles.detailsHeaders}>
              About
            </Text>

            <Text
              style={{ lineHeight: 25 }}
              maxFontSizeMultiplier={1.2}
              numberOfLines={numberOfLines}
              onPress={() => setNumberOfLines(numberOfLines === 30 ? 3 : 30)}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              adipisci aliquid aspernatur debitis delectus ducimus earum eius
              error et exercitationem explicabo fugiat fugit incidunt iste quam
              qui quidem, quos recusandae reiciendis repellendus reprehenderit
              sapiente soluta tempore vitae voluptas voluptatem. Incidunt,
              voluptatum.
            </Text>
          </View>

          <View
            style={{
              alignSelf: "flex-end",
              marginTop: 30,
              backgroundColor: colors.primary,
              paddingVertical: 20,
              paddingHorizontal: 40,
              borderRadius: 180,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              elevation: 3,
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowColor: colors.textPrimary,
              shadowOpacity: 0.2,
            }}
          >
            <Text
              maxFontSizeMultiplier={1.2}
              style={{
                color: colors.white,
                fontWeight: "bold",
                fontSize: 18,
                flexGrow: 1,
              }}
            >
              Add to cart
            </Text>
            <View
              style={[
                styles.tagDivider,
                {
                  backgroundColor: colors.white,
                  height: "70%",
                  marginRight: 20,
                },
              ]}
            />
            <Text
              maxFontSizeMultiplier={1.2}
              style={{
                color: colors.white,
                fontWeight: "bold",
                fontSize: 18,
                marginRight: 10,
              }}
            >
              $5.12
            </Text>
          </View>
        </ScrollView>
      </Animated.View>
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
    flex: 1,
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
    fontSize: 25,
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
    paddingTop: 5,
  },
  tagContainer: {
    flexDirection: "row",
    backgroundColor: colors.bgSecondary,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "space-around",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: colors.textPrimary,
    shadowOpacity: 0.2,
  },
  tagDivider: {
    width: 1,
    height: "100%",
    backgroundColor: colors.textPrimary,
    opacity: 0.5,
  },
  subTitle: { color: colors.white },
  coffeeSize: {
    paddingHorizontal: 35,
    paddingVertical: 15,
    backgroundColor: colors.white,
    borderRadius: 70,
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: colors.textPrimary,
    shadowOpacity: 0.2,
    color: colors.white,
  },
  detailsHeaders: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginVertical: 15,
  },
});

export default ProductDetails;
