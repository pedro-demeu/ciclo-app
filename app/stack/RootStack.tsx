import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  login: undefined;
  welcome: undefined;
};

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
        header: () => null,
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
