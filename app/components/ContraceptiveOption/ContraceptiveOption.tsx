import { View, Text } from "react-native";
import Bottom from "../Bottom/Bottom";
import ButtonOption from "../ButtonOption/ButtonOption";
import { useState } from "react";

interface ContraceptiveOptionProps {
  onBack: () => void;
  onNext: () => void;
  value: boolean | null;
  setValue: (bool: boolean) => void;
}
export default function ContraceptiveOption({
  onBack,
  onNext,
  setValue,
  value,
}: ContraceptiveOptionProps) {
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);

  const handleChange = (bool: boolean) => {
    setValue(bool);
    setNextButtonEnabled(true);
  };

  return (
    <View>
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
            handleChange(true);
          }}
          selected={!!value}
        />
        <ButtonOption
          name="Não"
          onPress={() => {
            handleChange(false);
          }}
          selected={typeof value === "boolean" && !value}
        />
      </View>
      <View
        style={{
          marginBottom: 20,
          opacity: nextButtonEnabled ? 1 : 0,
        }}
      >
        <Bottom label="Continuar" onPress={onNext} />
      </View>
      <Bottom label="Voltar" onPress={onBack} />
    </View>
  );
}
