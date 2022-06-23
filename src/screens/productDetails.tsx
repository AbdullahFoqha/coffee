import React from 'react';
import { StyleSheet, View } from "react-native";
import Coffee from "../models/coffee";

interface Props {
    coffee: Coffee
}

const Screen: React.FC<Props> = ({coffee}) => {
    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
})

export default Screen;
