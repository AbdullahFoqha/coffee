import React from 'react';
import {StyleSheet, View} from "react-native";
import AppView from "../components/common/appView";
import AppText from "../components/common/appText";

interface Props {

}

const Home: React.FC<Props> = ({}) => {
    return (
        <AppView style={styles.container}>
            <AppText>ALI</AppText>
        </AppView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Home;
