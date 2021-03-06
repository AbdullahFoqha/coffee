import React from 'react';
import { Dimensions, Image, StyleSheet, View, ViewStyle } from "react-native";
import Coffee from "../models/coffee";
import AppView from "./common/appView";
import colors from "../config/colors";
import AppText from "./common/appText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppIcon from "./common/appIcon";
import { nodeFromRef, SharedElement } from "react-native-shared-element";

interface Props {
    coffee: Coffee,
    style?: ViewStyle
}

let startAncestor;
let startNode;

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
        <View style={[styles.container, style!]} ref={ref => startAncestor = nodeFromRef(ref)}>
            <View style={styles.ratingContainer}>
                <MaterialCommunityIcons name={'star'} color={colors.white} size={15}/>
                <AppText style={styles.rating}>{rating}</AppText>
            </View>
            <SharedElement onNode={node => startNode = node}>
                <Image source={{uri: imageURL}} style={styles.imageContainer}/>
            </SharedElement>
            <AppText textProps={{
                numberOfLines: 1,
                ellipsizeMode: 'tail'
            }} style={styles.title}>{title}</AppText>
            <AppText>{subTitle}</AppText>

            <AppView style={styles.bottomContainer}>
                <AppText style={styles.price}>${price}</AppText>
                <AppIcon Icon={<MaterialCommunityIcons name={'plus'} size={20} color={colors.white}/>}/>
            </AppView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: colors.white,
        borderRadius: 20,
        margin: 7,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: Dimensions.get('screen').width * 0.4,
        elevation: 5,
        shadowColor: colors.textPrimary,
        shadowRadius: 3,
        shadowOpacity: .2,
        shadowOffset: {
            width: 2,
            height: 2
        }
    },
    imageContainer: {
        width: '100%',
        height: 125,
        borderRadius: 20,
        alignSelf: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5,
    },
    bottomContainer: {
        margin: 10,
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    rating: {
        color: colors.white
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20
    },
    ratingContainer: {
        right: 20,
        top: 20,
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: colors.accent,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 15,
        zIndex: 1
    }
})

export default ProductCard;
