import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import Coffee from "../models/coffee";
import colors from "../config/colors";
import AppText from "./common/appText";
import AppView from "./common/appView";

interface Props {
    offer: Coffee
}

const OffersCard: React.FC<Props> = ({offer}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: offer.imageURL}} style={styles.image}/>
            <AppView>
                <AppView style={styles.tagContainer}>
                    <AppText style={styles.tag}>Discount Sales</AppText>
                </AppView>

                {/*<AppText>{offer.description}</AppText>*/}
            </AppView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        padding: 10,
        width: '100%',
        shadowColor: colors.textPrimary,
        shadowRadius: 3,
        shadowOpacity: .2,
        shadowOffset: {
            width: 2,
            height: 2
        },
        marginVertical: 5,
        borderRadius: 20
    },
    image: {
        width: '35%',
        height: 125,
        borderRadius: 20,
        alignSelf: 'center',
        marginRight: 10
    },
    tagContainer: {
        backgroundColor: colors.accent,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 15,
        marginTop: 15
    },
    tag: {
        color: colors.white,
    }
})

export default OffersCard;
