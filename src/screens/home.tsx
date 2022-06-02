import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, ListRenderItemInfo, StyleSheet} from "react-native";
import AppView from "../components/common/appView";
import Coffee from "../models/coffee";
import {getCoffeeList} from "../data/coffeeData";
import ProductCard from "../components/productCard";
import AppText from "../components/common/appText";

interface Props {

}

const Home: React.FC<Props> = ({}) => {
    const [coffeeData, setCoffeeData] = useState<Array<Coffee>>();

    useEffect(() => {
        setCoffeeData(getCoffeeList())
    }, [])

    const renderCoffeeItem = ({item: coffee}: ListRenderItemInfo<Coffee>) => {
        return (
            <ProductCard coffee={coffee}/>
        )
    }

    return (
        <AppView style={styles.container}>
            <AppText style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginLeft: 10,
                marginTop: 10
            }}>Categories</AppText>
            <FlatList
                style={styles.productList}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={coffeeData}
                renderItem={renderCoffeeItem}
            />
        </AppView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10
    },
    productList: {
        flexGrow: 0,
        paddingBottom: 5
    }
})

export default Home;
