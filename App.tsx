import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import getMainNavigator from "./src/navigations/mainNavigation";

export default function App() {
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
