import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, ScrollView, StyleSheet} from "react-native";
import AppView from "../components/common/appView";
import Coffee from "../models/coffee";
import {getCategories, getCoffeeList} from "../data/coffeeData";
import ProductCard from "../components/productCard";
import AppText from "../components/common/appText";
import CoffeeCategory from "../models/category";
import AppIcon from "../components/common/appIcon";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";
import * as Constants from "expo-constants";
import HomeSearch from "../components/homeSearch";

interface Props {

}

const Home: React.FC<Props> = ({}) => {
    const [coffeeData, setCoffeeData] = useState<Array<Coffee>>();
    const [coffeeCategoriesData, setCoffeeCategoriesData] = useState<Array<CoffeeCategory>>([]);
    const [selectedCategory, setSelectedCategory] = useState<CoffeeCategory>(coffeeCategoriesData[0]);

    useEffect(() => {
        setCoffeeData(getCoffeeList())
        const categories = getCategories()
        setCoffeeCategoriesData(categories)
        setSelectedCategory(categories[0])
    }, [])

    const handleCategorySelection = (id: number): void => {
        console.log(id)
        const selectedCategory = coffeeCategoriesData.find(category => category.id === id)
        if (selectedCategory) {
            setSelectedCategory(selectedCategory)
        }
    }

    const renderCoffeeItem = ({item: coffee}: ListRenderItemInfo<Coffee>) => <ProductCard coffee={coffee}/>

    const renderCoffeeCategoryItem = ({
        item: {
            id,
            iconName,
            categoryName
        }
    }: ListRenderItemInfo<CoffeeCategory>) =>
        <AppIcon
            id={id}
            onPress={handleCategorySelection}
            style={id === selectedCategory.id ? styles.categoryStyle : styles.selectedCategoryStyle}
            Icon={
                <MaterialCommunityIcons name={iconName} color={id === selectedCategory.id ? colors.white : colors.textPrimary} size={20}/>
            }
            title={id === selectedCategory.id ? categoryName : undefined}
        />

    return (
        <ScrollView style={styles.container}>
            <AppText style={styles.title}>Good morning, David</AppText>
            <HomeSearch/>
            <AppText style={styles.title}>Categories</AppText>
            <FlatList
                contentContainerStyle={[styles.listContainer, {marginBottom: 0}]}
                style={[styles.productList, {marginHorizontal: 5}]}
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

            <AppText style={styles.title}>Special Offers</AppText>
            <FlatList
                contentContainerStyle={styles.listContainer}
                style={styles.productList}
                data={coffeeData}
                renderItem={renderCoffeeItem}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg,
        marginTop: Constants.default.statusBarHeight,
        flex: 1,
    },
    productList: {
        flexGrow: 0,
        paddingBottom: 5
    },
    listContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10
    },
    categoryStyle: {
        marginHorizontal: 2.5,
        marginVertical: 10,
        padding: 15
    },
    selectedCategoryStyle: {
        backgroundColor: colors.white,
        marginHorizontal: 2.5,
        marginVertical: 10,
        padding: 15
    }
})

export default Home;
