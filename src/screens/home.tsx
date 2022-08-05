import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import Coffee from "../models/coffee";
import { getCategories, getCoffeeList } from "../data/coffeeData";
import ProductCard from "../components/productCard";
import AppText from "../components/common/appText";
import CoffeeCategory from "../models/category";
import AppIcon from "../components/common/appIcon";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import HomeSearch from "../components/homeSearch";
import OffersCard from "../components/offersCard";
import { useNavigation } from "@react-navigation/native";
import Screens from "../config/navigations";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Cappuccino from "../../assets/cappuccino.svg";
import ColdBrew from "../../assets/cold-berw.svg";
import Espresso from "../../assets/espresso.svg";
import { SharedElement } from "react-navigation-shared-element";

interface Props {}

type RootStackParamList = {
  [Screens.DETAILS]: { coffee: Coffee };
};

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  Screens.DETAILS
>;

const Home: React.FC<Props> = ({}) => {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const [coffeeData, setCoffeeData] = useState<Array<Coffee>>();
  const [coffeeCategoriesData, setCoffeeCategoriesData] = useState<
    Array<CoffeeCategory>
  >([]);
  const [selectedCategory, setSelectedCategory] = useState<CoffeeCategory>(
    coffeeCategoriesData[0]
  );

  useEffect(() => {
    setCoffeeData(getCoffeeList());
    const categories = getCategories();
    setCoffeeCategoriesData(categories);
    setSelectedCategory(categories[0]);
    StatusBar.setBarStyle("dark-content");
  }, []);

  const onCategoryPress = (id: number): void => {
    const selectedCategory = coffeeCategoriesData.find(
      (category) => category.id === id
    );
    if (selectedCategory) {
      setSelectedCategory(selectedCategory);
    }
  };

  const onCoffeePress = (coffee: Coffee) =>
    navigation.push(Screens.DETAILS, { coffee });

  const renderHeader = () => (
    <View style={styles.header}>
      <Image
        source={{
          uri: "https://coffee.alexflipnote.dev/random",
          height: 40,
          width: 40,
        }}
        style={{ borderRadius: 100 }}
      />

      <Ionicons name={"notifications-outline"} size={25} />
    </View>
  );

  const renderCoffeeItem = ({ item: coffee }: ListRenderItemInfo<Coffee>) => (
    <Pressable onPress={() => onCoffeePress(coffee)}>
      <ProductCard coffee={coffee} />
    </Pressable>
  );

  const renderOfferItem = ({ item: offer }: ListRenderItemInfo<Coffee>) => (
    <OffersCard offer={offer} />
  );

  const renderCoffeeCategoryItem = ({
    item: { id, categoryName },
    index,
  }: ListRenderItemInfo<CoffeeCategory>) => (
    <AppIcon
      id={id}
      onPress={onCategoryPress}
      titleStyle={
        id !== selectedCategory.id
          ? { color: colors.textPrimary }
          : { color: colors.white }
      }
      style={
        id === selectedCategory.id
          ? styles.categoryStyle
          : styles.selectedCategoryStyle
      }
      Icon={
        (index === 0 && (
          <Cappuccino
            fill={
              id === selectedCategory.id ? colors.white : colors.textPrimary
            }
            width={18}
            height={18}
          />
        )) ||
        (index === 1 && (
          <ColdBrew
            fill={
              id === selectedCategory.id ? colors.white : colors.textPrimary
            }
            width={18}
            height={18}
          />
        )) ||
        (index === 2 && (
          <Espresso
            fill={
              id === selectedCategory.id ? colors.white : colors.textPrimary
            }
            width={18}
            height={18}
          />
        ))
      }
      title={categoryName}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {renderHeader()}
            <SharedElement id={"title"}>
              <AppText
                textProps={{ maxFontSizeMultiplier: 1.2 }}
                style={styles.greeting}
              >
                Good morning, David
              </AppText>
            </SharedElement>
            <HomeSearch />
            <AppText
              textProps={{ maxFontSizeMultiplier: 1.2 }}
              style={styles.title}
            >
              Categories
            </AppText>
            <FlatList
              contentContainerStyle={[
                styles.listContainer,
                { marginBottom: 0 },
              ]}
              style={[styles.productList, { marginHorizontal: 5 }]}
              data={coffeeCategoriesData}
              renderItem={renderCoffeeCategoryItem}
              horizontal
            />
            <FlatList
              contentContainerStyle={styles.listContainer}
              style={styles.productList}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={coffeeData}
              renderItem={renderCoffeeItem}
            />

            <AppText
              textProps={{ maxFontSizeMultiplier: 1.2 }}
              style={styles.title}
            >
              Special Offers &#x1f525;
            </AppText>
          </>
        }
        style={styles.productList}
        data={coffeeData}
        renderItem={renderOfferItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    flex: 1,
  },
  productList: {
    flexGrow: 0,
    paddingBottom: 5,
  },
  listContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  categoryStyle: {
    marginHorizontal: 2.5,
    marginVertical: 10,
    padding: 15,
  },
  selectedCategoryStyle: {
    backgroundColor: colors.white,
    marginHorizontal: 2.5,
    marginVertical: 10,
    padding: 15,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 15,
  },
  header: {
    alignSelf: "center",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Home;
