import { Text, View } from "react-native";
import LayoutContainer from "../../components/LayoutContainer/LayoutContainer";
import ButtonOption from "../../components/ButtonOption/ButtonOption";
import Bottom from "../../components/Bottom/Bottom";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useSteps } from "../../contexts/StepContext";
import { RootStackParamList } from "../../stack/RootStack";

export default function ItensityScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { nextStep, updateStep } = useSteps();
  const handleNext = () => {
    navigation.navigate("durationCicle");
    nextStep();
    updateStep(3, true);
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
        Qual a <Text style={{ fontWeight: "bold" }}>intensidade</Text> do seu
        fluxo?
      </Text>

      <View style={{ marginTop: 20, marginBottom: 40 }}>
        <ButtonOption name="Leve" onPress={() => {}} />
        <ButtonOption name="Entre leve e moderado" onPress={() => {}} />
        <ButtonOption name="Moderado" onPress={() => {}} />
        <ButtonOption name="Entre moderado e intenso" onPress={() => {}} />
        <ButtonOption name="Intenso" onPress={() => {}} />
      </View>
      <Bottom label="Continuar" onPress={handleNext} />
    </LayoutContainer>
  );
}
