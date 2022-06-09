import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import navigations from "../config/navigations";
import colors from "../config/colors";
import React, {Fragment} from "react";
import {Entypo, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import Favorite from "../screens/favorite";
import Cart from "../screens/cart";
import Profile from "../screens/profile";
import {Image, View} from "react-native";


const Tab = createBottomTabNavigator()
const getMainNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.iconPrimary,
            tabBarStyle: {
                backgroundColor: colors.white,
                borderTopWidth: 0
            },
        }}>
            {renderTab(navigations.HOME, 'home-variant', Home)}
            {renderTab(navigations.FAVORITE, 'cards-heart-outline', Favorite)}
            {renderTab(navigations.CART, 'cart-outline', Cart)}
            {renderTab(navigations.PROFILE, 'account-outline', Profile)}
        </Tab.Navigator>
    )
}

const renderTab = (tabName: string, iconName: 'home-variant' | 'account-outline' | 'cart-outline' | 'cards-heart-outline', Component: React.FC) =>
    <Tab.Screen name={tabName} options={() => ({
        headerLeft: ({}) => (
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <Image source={{
                    uri: 'https://coffee.alexflipnote.dev/random',
                    height: 40,
                    width: 40
                }} style={{borderRadius: 100}}/>
                <View/>
            </View>
        ),
        headerRight: () => (
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <View/>
                <Ionicons name={'notifications-outline'} size={25}/>
            </View>
        ),
        headerStyle: {
            backgroundColor: colors.white,
            borderBottomWidth: 0,
            elevation: 0,
            shadowColor: 'transparent'
        },
        tabBarLabel: ({
            focused,
            color
        }) => {
            return (
                <Fragment>
                    {focused && <Entypo name={'dot-single'} size={20} color={color}/>}
                </Fragment>
            )
        },
        tabBarIcon: ({
            color,
            size
        }) => {
            return (
                <MaterialCommunityIcons name={iconName} color={color} size={size}/>
            )
        }
    })} component={Component}/>


export default getMainNavigator
