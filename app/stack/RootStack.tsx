import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import CreateCalendarScreen from "../screens/CreateCalendarScreen/CreateCalendarScreen";
import DurationScreen from "../screens/DurationScreen/DurationScreen";
import IntensityScreen from "../screens/IntensityScreen/IntensityScreen";
import DurationCicleScreen from "../screens/DurationCicleScreen/DurationCicleScreen";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  login: undefined;
  welcome: undefined;
  createCalendar: undefined;
  duration: undefined;
  intensity: undefined;
  durationCicle: undefined;
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
      <Stack.Screen name="createCalendar" component={CreateCalendarScreen} />
      <Stack.Screen name="duration" component={DurationScreen} />
      <Stack.Screen name="intensity" component={IntensityScreen} />
      <Stack.Screen name="durationCicle" component={DurationCicleScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
