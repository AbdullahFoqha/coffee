import React, { useEffect, useState } from 'react';
import { FlatList, Image, ListRenderItemInfo, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import Coffee from "../models/coffee";
import { getCategories, getCoffeeList } from "../data/coffeeData";
import ProductCard from "../components/productCard";
import AppText from "../components/common/appText";
import CoffeeCategory from "../models/category";
import AppIcon from "../components/common/appIcon";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import HomeSearch from "../components/homeSearch";
import OffersCard from "../components/offersCard";
import { useNavigation } from "@react-navigation/native";
import navigations from "../config/navigations";

interface Props {
}

const Home: React.FC<Props> = ({}) => {
    const navigation = useNavigation();
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

    const renderHeader = () => (
        <View style={styles.header}>
            <Image source={{
                uri: 'https://coffee.alexflipnote.dev/random',
                height: 40,
                width: 40
            }} style={{borderRadius: 100}}/>

            <Ionicons name={'notifications-outline'} size={25}/>

        </View>
    )

    const renderCoffeeItem = ({item: coffee}: ListRenderItemInfo<Coffee>) => <Pressable
        onPress={() => navigation.navigate(navigations.DETAILS as never)}>
        <ProductCard coffee={coffee}/>
    </Pressable>
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
        <SafeAreaView style={styles.container}>

            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <>
                        {renderHeader()}
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
                        <FlatList
                            contentContainerStyle={styles.listContainer}
                            style={styles.productList}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={coffeeData}
                            renderItem={renderCoffeeItem}
                        />

                        <AppText style={styles.title}>Special Offers  &#x1f525;</AppText>
                    </>
                }

                style={styles.productList}
                data={coffeeData}
                renderItem={renderOfferItem}
            />
        </SafeAreaView>
    );
}

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
        marginTop: 15,
    },
    header: {
        alignSelf: 'center',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default Home;
