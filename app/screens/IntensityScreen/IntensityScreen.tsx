import { Text, View } from "react-native";
import LayoutContainer from "../../components/LayoutContainer/LayoutContainer";
import ButtonOption from "../../components/ButtonOption/ButtonOption";
import Bottom from "../../components/Bottom/Bottom";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../stack/RootStack";
import { Intensity, useCalendarFormContext } from "@/app/contexts/FormData";
import { useState } from "react";

export default function ItensityScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { updateFormData, goBack } = useCalendarFormContext();
  const [intensity, setIntensity] = useState<Intensity | null>(null);

  const handleNext = () => {
    navigation.navigate("durationCicle");
    intensity && updateFormData({ intensity }, { id: 3, done: true });
  };

  const handleBack = () => {
    navigation.goBack();
    goBack();
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
        <ButtonOption
          name="Leve"
          onPress={() => {
            setIntensity(Intensity.LOW);
          }}
          selected={intensity === Intensity.LOW}
        />
        <ButtonOption
          name="Entre leve e moderado"
          onPress={() => {
            setIntensity(Intensity.LOW_MEDIUM);
          }}
          selected={intensity === Intensity.LOW_MEDIUM}
        />
        <ButtonOption
          name="Moderado"
          onPress={() => {
            setIntensity(Intensity.MEDIUM);
          }}
          selected={intensity === Intensity.MEDIUM}
        />
        <ButtonOption
          name="Entre moderado e intenso"
          onPress={() => {
            setIntensity(Intensity.MEDIUM_HIGH);
          }}
          selected={intensity === Intensity.MEDIUM_HIGH}
        />
        <ButtonOption
          name="Intenso"
          onPress={() => {
            setIntensity(Intensity.HIGH);
          }}
          selected={intensity === Intensity.HIGH}
        />
      </View>
      <View
        style={{
          marginBottom: 20,
        }}
      >
        <Bottom label="Continuar" onPress={handleNext} />
      </View>

      <Bottom label="Voltar" onPress={handleBack} />
    </LayoutContainer>
  );
}
