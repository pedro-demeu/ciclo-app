import { SafeAreaView, View, Image, Text } from "react-native";
import ProgressHorizontalBar from "../../components/ProgressCreatingCalendar/ProgressHorizontalBar";
import { useState } from "react";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../stack/RootStack";
import Bottom from "../../components/Bottom/Bottom";
import NumberInput from "../../components/NumberInput/NumberInput";
import { useCalendarFormContext } from "@/app/contexts/FormData";

export default function DurationCicleScreen() {
  const [duration, setDuration] = useState(21);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { updateFormData, goBack } = useCalendarFormContext();
  const handleNext = () => {
    navigation.navigate("contraceptive");
    updateFormData({ duration }, { id: 4, done: true });
  };

  const handleBack = () => {
    goBack();
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FF2255",
        justifyContent: "space-between",
      }}
    >
      <Image source={require("../../../assets/images/forma_solta.png")} />
      <View
        style={{
          position: "absolute",
          alignSelf: "center",
          flex: 1,
          zIndex: 1,
          width: "75%",
        }}
      >
        <View
          style={{
            height: 200,
            paddingTop: 50,
            alignSelf: "center",
            width: "100%",
          }}
        >
          <ProgressHorizontalBar />
        </View>
        <View>
          <Text
            style={{
              color: "white",
              fontFamily: "poppings",
              textAlign: "center",
              alignSelf: "center",
              fontSize: 22,
              fontWeight: "100",
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "poppings",
              }}
            >
              Quantos dias
            </Text>{" "}
            dura seu ciclo?
          </Text>

          <View
            style={{
              marginBottom: 60,
            }}
          >
            <NumberInput initialValue={duration} onChange={setDuration} />
          </View>
          <View
            style={{
              marginBottom: 20,
            }}
          >
            <Bottom label="Continuar" onPress={handleNext} />
          </View>

          <Bottom label="Voltar" onPress={handleBack} />
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
