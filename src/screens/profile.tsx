import React from 'react';
import {StyleSheet, View} from "react-native";
import AppText from "../components/common/appText";
import AppView from "../components/common/appView";

interface Props {

}

const Profile: React.FC<Props> = ({}) => {
    return (
        <AppView style={styles.container}>
            <AppText>Profile</AppText>
        </AppView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Profile;
