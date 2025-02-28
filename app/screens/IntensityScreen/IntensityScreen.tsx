import { Text } from "react-native";
import LayoutContainer from "../../components/LayoutContainer/LayoutContainer";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../stack/RootStack";
import { Intensity, useCalendarFormContext } from "@/app/contexts/FormData";
import { useState } from "react";
import IntensityOptions from "@/app/components/IntensityOptions/IntensityOptions";

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

      <IntensityOptions
        selectedValue={intensity}
        setSelectedValue={setIntensity}
        onBack={handleBack}
        onNext={handleNext}
      />
    </LayoutContainer>
  );
}
