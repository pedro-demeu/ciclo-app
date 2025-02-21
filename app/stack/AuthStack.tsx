import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";

const Stack = createNativeStackNavigator();

export type AuthStackParamList = {
  welcome: undefined;
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerShown: false,
        header: () => null,
        contentStyle: {
          flex: 1,
          backgroundColor: "#FFF",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
