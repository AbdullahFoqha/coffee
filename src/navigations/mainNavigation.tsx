import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import colors from "../config/colors";
import React, { Fragment } from "react";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import Favorite from "../screens/favorite";
import Cart from "../screens/cart";
import Profile from "../screens/profile";
import ProductDetails from "../screens/productDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screens from "../config/navigations";
import Coffee from "../models/coffee";

export type RoutesParamList = {
  [Screens.DETAILS]: { coffee: Coffee };
};

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Screens.HOME} component={Home} />
    <Stack.Screen name={Screens.DETAILS} component={ProductDetails} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const getMainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.iconPrimary,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0,
        },
        headerShown: false,
      }}
    >
      {renderTab(Screens.HOME_STACK, "home-variant", StackNavigator)}
      {renderTab(Screens.FAVORITE, "cards-heart-outline", Favorite)}
      {renderTab(Screens.CART, "cart-outline", Cart)}
      {renderTab(Screens.PROFILE, "account-outline", Profile)}
    </Tab.Navigator>
  );
};

const renderTab = (
  tabName: Screens,
  iconName:
    | "home-variant"
    | "account-outline"
    | "cart-outline"
    | "cards-heart-outline",
  Component: React.FC
) => (
  <Tab.Screen
    name={tabName}
    options={() => ({
      tabBarLabel: ({ focused, color }) => {
        return (
          <Fragment>
            {focused && <Entypo name={"dot-single"} size={20} color={color} />}
          </Fragment>
        );
      },
      tabBarIcon: ({ color, size }) => {
        return (
          <MaterialCommunityIcons name={iconName} color={color} size={size} />
        );
      },
    })}
    component={Component}
  />
);

export default getMainNavigator;
