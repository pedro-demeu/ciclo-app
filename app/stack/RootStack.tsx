import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import CreateCalendarScreen from "../screens/CreateCalendarScreen/CreateCalendarScreen";
import DurationScreen from "../screens/DurationScreen/DurationScreen";
import IntensityScreen from "../screens/IntensityScreen/IntensityScreen";
import DurationCicleScreen from "../screens/DurationCicleScreen/DurationCicleScreen";
import ContraceptiveScreen from "../screens/ContraceptiveScreen/ContraceptiveScreen";
import SuccessCalendarScreen from "../screens/SuccessCalendarScreen/SuccessCalendarScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CalendarScreen from "../screens/CalendarScreen/CalendarScreen";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  login: undefined;
  welcome: undefined;
  createCalendar: undefined;
  duration: undefined;
  intensity: undefined;
  durationCicle: undefined;
  contraceptive: undefined;
  successCalendar: undefined;
  home: undefined;
  calendarScreen: undefined;
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
      <Stack.Screen name="contraceptive" component={ContraceptiveScreen} />
      <Stack.Screen name="successCalendar" component={SuccessCalendarScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="calendarScreen" component={CalendarScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
