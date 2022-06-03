import React from 'react';
import {StyleSheet, View} from "react-native";
import Coffee from "../models/coffee";

interface Props {
    item: Coffee
}

const OffersCard: React.FC<Props> = ({}) => {
    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
})

export default OffersCard;
