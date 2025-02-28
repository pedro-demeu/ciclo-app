import { Intensity } from "../../contexts/FormData";
import { View } from "react-native";
import ButtonOption from "../ButtonOption/ButtonOption";
import Bottom from "../Bottom/Bottom";
import { useState } from "react";

interface IntensityProps {
  selectedValue: Intensity | null;
  setSelectedValue: (intensity: Intensity) => void;
  onNext: () => void;
  onBack: () => void;
}
export default function IntensityOptions({
  selectedValue,
  setSelectedValue,
  onNext,
  onBack,
}: IntensityProps) {
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);
  const handleChange = (value: Intensity) => {
    setSelectedValue(value);
    value && setNextButtonEnabled(true);
  };

  return (
    <View style={{ marginTop: 20, marginBottom: 40 }}>
      <ButtonOption
        name="Leve"
        onPress={() => handleChange(Intensity.LOW)}
        selected={selectedValue === Intensity.LOW}
      />
      <ButtonOption
        name="Entre leve e moderado"
        onPress={() => handleChange(Intensity.LOW_MEDIUM)}
        selected={selectedValue === Intensity.LOW_MEDIUM}
      />
      <ButtonOption
        name="Moderado"
        onPress={() => handleChange(Intensity.MEDIUM)}
        selected={selectedValue === Intensity.MEDIUM}
      />
      <ButtonOption
        name="Entre moderado e intenso"
        onPress={() => handleChange(Intensity.MEDIUM_HIGH)}
        selected={selectedValue === Intensity.MEDIUM_HIGH}
      />
      <ButtonOption
        name="Intenso"
        onPress={() => handleChange(Intensity.HIGH)}
        selected={selectedValue === Intensity.HIGH}
      />

      <View
        style={{
          marginBottom: 20,
          marginTop: 20,
          opacity: nextButtonEnabled ? 1 : 0,
        }}
      >
        <Bottom label="Continuar" onPress={onNext} />
      </View>

      <Bottom label="Voltar" onPress={onBack} />
    </View>
  );
}
