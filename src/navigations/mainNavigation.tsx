import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import navigations from "../config/navigations";
import colors from "../config/colors";
import React, {Fragment} from "react";
import {Entypo, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {View} from "react-native";
import Navigations from "../config/navigations";
import {IconProps} from "@expo/vector-icons/build/createIconSet";
import Favorite from "../screens/favorite";
import Cart from "../screens/cart";
import Profile from "../screens/profile";


const Tab = createBottomTabNavigator()
const getMainNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.iconPrimary,
            tabBarStyle: {backgroundColor: colors.white, borderTopWidth: 0}
        }}>
            {renderTab(navigations.HOME, 'home-variant', Home)}
            {renderTab(navigations.FAVORITE, 'cards-heart-outline', Favorite)}
            {renderTab(navigations.CART, 'cart-outline', Cart)}
            {renderTab(navigations.PROFILE, 'account-outline', Profile)}
        </Tab.Navigator>
    )
}

const renderTab = (tabName: string, iconName: string, Component: React.FC) =>
    <Tab.Screen name={tabName} options={() => ({
        tabBarLabel: ({focused, position, color}) => {
            return (
                <Fragment>
                    {focused && <Entypo name={'dot-single'} size={20} color={color}/>}
                </Fragment>
            )
        },
        tabBarIcon: ({color, size}) => {
            return (
                <MaterialCommunityIcons name={iconName} color={color} size={size}/>
            )
        }
    })} component={Component}/>


export default getMainNavigator
