import React from 'react';
import {Platform, StyleSheet, Text, TextStyle, View} from "react-native";
import colors from "../../config/colors";

interface Props {
    style?: TextStyle
}

const AppText: React.FC<Props> = ({
    children,
    style
}) => {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        // fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Lao Sangam MN',
        color: colors.textPrimary
    }
})

export default AppText;
