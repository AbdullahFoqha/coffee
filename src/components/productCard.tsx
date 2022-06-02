import React from 'react';
import {Dimensions, Image, StyleSheet, View, ViewStyle} from "react-native";
import Coffee from "../models/coffee";
import AppView from "./common/appView";
import colors from "../config/colors";
import AppText from "./common/appText";
import {MaterialCommunityIcons} from "@expo/vector-icons";

interface Props {
    coffee: Coffee,
    style?: ViewStyle
}

const ProductCard: React.FC<Props> = ({
    coffee: {
        imageURL,
        price,
        rating,
        title,
        subTitle
    },
    style
}) => {
    return (
        <AppView style={[styles.container, style!]}>
            <View style={styles.ratingContainer}>
                <MaterialCommunityIcons name={'star'} color={colors.white} size={15}/>
                <AppText style={styles.rating}>{rating}</AppText>
            </View>
            <Image source={{uri: imageURL}} style={styles.image}/>

            <AppText style={styles.title}>{title}</AppText>
            <AppText>{subTitle}</AppText>

            <AppView style={styles.bottomContainer}>
                <AppText style={styles.price}>${price}</AppText>
                <AppView style={{
                    backgroundColor: colors.primary,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <MaterialCommunityIcons name={'plus'} size={25} color={colors.white}/>
                </AppView>
            </AppView>
        </AppView>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: colors.white,
        borderRadius: 15,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: Dimensions.get('screen').width * 0.4,
        shadowColor: colors.textPrimary,
        shadowRadius: 5,
        shadowOpacity: .2,
        shadowOffset: {
            width: 5,
            height: 5
        }
    },
    image: {
        width: '100%',
        height: 140,
        borderRadius: 15,
        alignSelf: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginVertical: 2
    },
    bottomContainer: {
        marginTop: 10,
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rating: {
        color: colors.white
    },
    price: {
        fontWeight: 'bold',
        fontSize: 25
    },
    ratingContainer: {
        right: 20,
        top: 20,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.accent,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
        zIndex: 1
    }
})

export default ProductCard;
