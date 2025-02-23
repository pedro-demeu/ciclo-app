import { Text, View } from "react-native";
import LayoutContainer from "../../components/LayoutContainer/LayoutContainer";
import ButtonOption from "../../components/ButtonOption/ButtonOption";
import Bottom from "../../components/Bottom/Bottom";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useSteps } from "../../contexts/StepContext";
import { RootStackParamList } from "../../stack/RootStack";

export default function ContraceptiveScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { nextStep, updateStep } = useSteps();
  const handleNext = () => {
    navigation.navigate("successCalendar");
    nextStep();
    updateStep(5, true);
  };
  return (
    <LayoutContainer>
      <Text
        style={{
          color: "#FFF",
          width: "75%",
          fontFamily: "poppins",
          fontSize: 22,
          textAlign: "center",
          alignSelf: "center",
          fontWeight: "100",
          marginBottom: 20,
        }}
      >
        Você usa algum{" "}
        <Text style={{ fontWeight: "bold" }}>método contraceptivo?</Text>
      </Text>

      <View style={{ marginTop: 20, marginBottom: 40 }}>
        <ButtonOption name="Sim" onPress={() => {}} />
        <ButtonOption name="Não" onPress={() => {}} />
      </View>
      <Bottom label="Continuar" onPress={handleNext} />
    </LayoutContainer>
  );
}
