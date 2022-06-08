import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, ScrollView, StyleSheet} from "react-native";
import Coffee from "../models/coffee";
import {getCategories, getCoffeeList} from "../data/coffeeData";
import ProductCard from "../components/productCard";
import AppText from "../components/common/appText";
import CoffeeCategory from "../models/category";
import AppIcon from "../components/common/appIcon";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";
import HomeSearch from "../components/homeSearch";
import OffersCard from "../components/offersCard";

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
    const renderOfferItem = ({item: offer}: ListRenderItemInfo<Coffee>) => <OffersCard offer={offer}/>

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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <AppText style={styles.greeting}>Good morning, David</AppText>
            <HomeSearch/>
            <AppText style={styles.title}>Categories</AppText>
            <FlatList
                contentContainerStyle={[styles.listContainer, {marginBottom: 0}]}
                style={[styles.productList, {marginHorizontal: 5}]}
                data={coffeeCategoriesData}
                renderItem={renderCoffeeCategoryItem}
                horizontal
            />
            n
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg,
        // marginTop: Constants.default.statusBarHeight,
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
        marginTop: 10,
        marginBottom: 20
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
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10,
    }
})

export default Home;
