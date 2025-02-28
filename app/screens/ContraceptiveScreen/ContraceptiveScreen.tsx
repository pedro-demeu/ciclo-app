import LayoutContainer from "../../components/LayoutContainer/LayoutContainer";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../stack/RootStack";
import { useState } from "react";
import { useCalendarFormContext } from "@/app/contexts/FormData";
import ContraceptiveOption from "@/app/components/ContraceptiveOption/ContraceptiveOption";

export default function ContraceptiveScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [value, setValue] = useState<boolean | null>(
    // eslint-disable-next-line prettier/prettier
    null
  );
  const { updateFormData, goBack } = useCalendarFormContext();
  const handleNext = () => {
    navigation.navigate("successCalendar");
    updateFormData(
      { useContraceptive: value ?? false },
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
      <ContraceptiveOption
        onBack={handleBack}
        onNext={handleNext}
        value={value}
        setValue={setValue}
      />
    </LayoutContainer>
  );
}
