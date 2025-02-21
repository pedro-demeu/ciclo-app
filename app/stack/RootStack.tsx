import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  login: undefined;
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
    </Stack.Navigator>
  );
};

export default RootStack;
