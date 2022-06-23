import React, {Fragment} from 'react';
import {Pressable, StyleSheet, ViewStyle} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import AppText from "./appText";
import colors from "../../config/colors";

interface Props {
    Icon: MaterialCommunityIcons,
    title?: string,
    id?: number,
    style?: ViewStyle,
    onPress?: (id: number) => void
}

const AppIcon: React.FC<Props> = ({
    Icon,
    title,
    style,
    onPress,
    id
}) => {
    return (
        <Pressable onPress={() => onPress ? onPress(id!) : undefined} style={[styles.container, style]}>
            <Fragment>
                {Icon}
                {title && <AppText style={styles.title}>{title}</AppText>}
            </Fragment>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: colors.primary,
        alignItems: 'center',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowColor: colors.textPrimary,
        shadowOpacity: .2
    },
    title: {
        color: colors.white,
        fontWeight: '500',
        marginLeft: 5,
        fontSize: 15
    }
})

export default AppIcon;
