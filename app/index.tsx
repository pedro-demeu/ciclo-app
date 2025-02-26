import * as React from "react";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { View } from "react-native";
import RootStack from "./stack/RootStack";

export default function HomeScreen() {
  const [loaded, error] = useFonts({
    poppings: require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
  });

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <RootStack />
    </View>
  );
}
