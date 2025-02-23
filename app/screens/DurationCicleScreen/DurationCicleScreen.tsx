import { SafeAreaView, View, Image, Text } from "react-native";
import ProgressHorizontalBar from "../../components/ProgressCreatingCalendar/ProgressHorizontalBar";
import { useSteps } from "../../contexts/StepContext";
import { useState } from "react";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../stack/RootStack";
import Bottom from "../../components/Bottom/Bottom";
import NumberInput from "../../components/NumberInput/NumberInput";
import { Step } from "../CreateCalendarScreen/CreateCalendarScreen";

export default function DurationCicleScreen() {
  const [duration, setDuration] = useState(21);
  const { steps, nextStep, updateStep } = useSteps();
  const [selected, setSelected] = useState<Step | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNext = () => {
    navigation.navigate("intensity");
    nextStep();
    updateStep(2, true);
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
          <ProgressHorizontalBar stepList={steps} />
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
          <Bottom label="Continuar" onPress={handleNext} />
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
