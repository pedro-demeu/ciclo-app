import { SafeAreaView, Text, View, Image } from "react-native";
import Bottom from "@/app/components/Bottom/Bottom";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/app/stack/RootStack";
import Button from "@/app/components/Button/Button";

export default function WelcomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const loggedUser = {
    name: "Sabrina Ellen",
  };

  const handlePress = () => {
    navigation.navigate("createCalendar");
  };

  // TODO: remove auth and cache
  const handleExit = () => {
    navigation.navigate("login");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FF2255",
        justifyContent: "space-between",
        // paddingBottom: 250,
        // position: "absolute",
      }}
    >
      <Image source={require("../../../assets/images/forma_solta.png")} />
      <View
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          alignSelf: "center",
          flex: 1,
          zIndex: 1,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            width: "100%",
            height: "40%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontSize: 50,
              fontFamily: "poppings",
            }}
          >
            Ciclo
          </Text>
        </View>
        <View
          style={{
            marginTop: 100,
            width: "100%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              color: "white",
              fontWeight: "bold",
              fontFamily: "poppings",
            }}
          >
            Olá, {loggedUser.name}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: "white",
              marginBottom: 40,
              fontFamily: "poppings",
            }}
          >
            Seja bem vinda ao Ciclo
          </Text>

          <Button label="Criar calendário" onPress={handlePress} />
        </View>
        <View
          style={{
            marginTop: 160,
          }}
        >
          <Bottom label="Sair" onPress={handleExit} />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
        }}
      >
        <Image source={require("../../../assets/images/forma_solta_2.png")} />
      </View>
    </SafeAreaView>
  );
}
