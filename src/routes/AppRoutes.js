import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Button, Block, Text, Card, Badge } from "../components";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../constants";

import WelcomeScreen from "../Pages/WelcomeScreen/index";
import LoginScreen from "../Pages/LoginScreen/index";
import SignUpScreen from "../Pages/SignUpScreen/index";
import ForgotScreen from "../Pages/ForgotScreen/index";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "transparent", // or 'white
    borderBottomColor: "transparent",
    elevation: 0, // for android only
  },
  headerLeft: (props) => (
    <TouchableOpacity onPress={() => {}}></TouchableOpacity>
  ),
  headerBackTitle: null,
  headerTitle: null,
  headerLeftContainerStyle: {
    alignItems: "center",
    marginLeft: theme.sizes.base, //for iOS multiply the value by 2
    paddingRight: theme.sizes.base,
  },
  headerRightContainerStyle: {
    alignItems: "center",
    paddingRight: theme.sizes.base,
  },
  animationEnabled: false,
};

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={screenOptionStyle}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={screenOptionStyle}
      />
      <Stack.Screen
        name="ForgotScreen"
        component={ForgotScreen}
        options={screenOptionStyle}
      />
    </Stack.Navigator>
  );
}
