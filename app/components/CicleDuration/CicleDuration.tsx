import { Text, View } from "react-native";
import Bottom from "../Bottom/Bottom";
import NumberInput from "../NumberInput/NumberInput";

interface CicleDurationProps {
  onBack: () => void;
  onNext: () => void;
  value: number;
  setValue: (n: number) => void;
}
export default function CicleDuration({
  value = 21,
  setValue,
  onNext,
  onBack,
}: CicleDurationProps) {
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
        dura seu ciclo?
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
