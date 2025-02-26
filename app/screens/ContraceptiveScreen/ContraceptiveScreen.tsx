import { Text, View } from "react-native";
import LayoutContainer from "../../components/LayoutContainer/LayoutContainer";
import ButtonOption from "../../components/ButtonOption/ButtonOption";
import Bottom from "../../components/Bottom/Bottom";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../stack/RootStack";
import { useState } from "react";
import { useCalendarFormContext } from "@/app/contexts/FormData";

export default function ContraceptiveScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [useContraceptive, setUseContraceptive] = useState<boolean | null>(
    // eslint-disable-next-line prettier/prettier
    null
  );
  const { updateFormData, goBack } = useCalendarFormContext();
  const handleNext = () => {
    navigation.navigate("successCalendar");
    updateFormData(
      { useContraceptive: useContraceptive ?? false },
      // eslint-disable-next-line prettier/prettier
      { id: 5, done: true }
    );
  };
  const handleBack = () => {
    goBack();
    navigation.goBack();
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
        <ButtonOption
          name="Sim"
          onPress={() => {
            setUseContraceptive(true);
          }}
          selected={useContraceptive === true}
        />
        <ButtonOption
          name="Não"
          onPress={() => {
            setUseContraceptive(false);
          }}
          selected={
            typeof useContraceptive === "boolean" && useContraceptive === false
          }
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
