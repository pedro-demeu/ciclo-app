import { Text, View } from "react-native";
import Bottom from "../Bottom/Bottom";
import NumberInput from "../NumberInput/NumberInput";

interface DaysDurationProps {
  onBack: () => void;
  onNext: () => void;
  value: number;
  setValue: (n: number) => void;
}
export default function DaysDuration({
  value,
  setValue,
  onNext,
  onBack,
}: DaysDurationProps) {
  return (
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
        costuma durar a sua menstruação?
      </Text>

      <View
        style={{
          marginBottom: 60,
        }}
      >
        <NumberInput value={value} onChange={setValue} />
      </View>

      <View
        style={{
          marginBottom: 20,
        }}
      >
        <Bottom label="Continuar" onPress={onNext} />
      </View>

      <Bottom label="Voltar" onPress={onBack} />
    </View>
  );
}
