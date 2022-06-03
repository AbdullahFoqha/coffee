import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import getMainNavigator from "./src/navigations/mainNavigation";
import {useEffect} from "react";

export default function App() {

    useEffect(() => {
        StatusBar.setBarStyle('dark-content')
    }, [])

    return (
        <NavigationContainer>
            {getMainNavigator()}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
