import React from 'react';
import {SafeAreaView, StyleSheet, ViewStyle} from "react-native";
import colors from "../../config/colors";

interface Props {
    style: ViewStyle
}

const AppView: React.FC<Props> = ({children, style}) => {
    return (
        <SafeAreaView style={[styles.container, style]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg
    }
})

export default AppView;
