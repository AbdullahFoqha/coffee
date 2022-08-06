import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import colors from "../config/colors";
import React, { Fragment } from "react";
import { Entypo } from "@expo/vector-icons";
import Favorite from "../screens/favorite";
import Cart from "../screens/cart";
import Profile from "../screens/profile";
import ProductDetails from "../screens/productDetails";
import Screens from "../config/navigations";
import Coffee from "../models/coffee";
import HomeIcon from "../../assets/home.svg";
import Heart from "../../assets/heart.svg";
import CartIcon from "../../assets/cart.svg";

import { createSharedElementStackNavigator } from "react-navigation-shared-element";

export type RoutesParamList = {
  [Screens.DETAILS]: { coffee: Coffee };
};

const Stack = createSharedElementStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Screens.HOME} component={Home} />
    <Stack.Screen
      name={Screens.DETAILS}
      component={ProductDetails}
      sharedElements={(route, otherRoute, showing) => {
        const { id } = route.params.coffee;
        return [id];
      }}
    />
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
      <Tab.Screen
        name={Screens.HOME_STACK}
        options={() => ({
          tabBarLabel: ({ focused, color }) => {
            return (
              <Fragment>
                {focused && (
                  <Entypo name={"dot-single"} size={20} color={color} />
                )}
              </Fragment>
            );
          },
          tabBarIcon: ({ color, size }) => {
            return <HomeIcon fill={color} width={size} height={size} />;
          },
        })}
        component={StackNavigator}
      />

      <Tab.Screen
        name={Screens.FAVORITE}
        options={() => ({
          tabBarLabel: ({ focused, color }) => {
            return (
              <Fragment>
                {focused && (
                  <Entypo name={"dot-single"} size={20} color={color} />
                )}
              </Fragment>
            );
          },
          tabBarIcon: ({ color, size }) => {
            return <Heart fill={color} width={size} height={size} />;
          },
        })}
        component={Favorite}
      />

      <Tab.Screen
        name={Screens.CART}
        options={() => ({
          tabBarLabel: ({ focused, color }) => {
            return (
              <Fragment>
                {focused && (
                  <Entypo name={"dot-single"} size={20} color={color} />
                )}
              </Fragment>
            );
          },
          tabBarIcon: ({ color, size }) => {
            return <CartIcon fill={color} width={28} height={28} />;
          },
        })}
        component={Cart}
      />

      <Tab.Screen
        name={Screens.PROFILE}
        options={() => ({
          tabBarLabel: ({ focused, color }) => {
            return (
              <Fragment>
                {focused && (
                  <Entypo name={"dot-single"} size={20} color={color} />
                )}
              </Fragment>
            );
          },
          tabBarIcon: ({ color, size }) => {
            return <HomeIcon fill={color} width={size} height={size} />;
          },
        })}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default getMainNavigator;
