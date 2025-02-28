import { SafeAreaView, View, Image, Text } from "react-native";
import ProgressHorizontalBar from "../../components/ProgressCreatingCalendar/ProgressHorizontalBar";
import { useState } from "react";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../stack/RootStack";
import Bottom from "../../components/Bottom/Bottom";
import NumberInput from "../../components/NumberInput/NumberInput";
import { useCalendarFormContext } from "@/app/contexts/FormData";
import { DaysDuration } from "@/app/components/DaysDuration/DaysDuration";

export default function DurationScreen() {
  const [duration, setDuration] = useState(5);
  const { goBack: prevStep, updateFormData } = useCalendarFormContext();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNext = () => {
    navigation.navigate("intensity");
    updateFormData({ duration }, { id: 2, done: true });
  };

  const handleBack = () => {
    prevStep();
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FF2255",
        justifyContent: "space-between",
      }}
    >
      <Image source={require("../../../assets/images/forma_solta.png")} />
      <View
        style={{
          position: "absolute",
          alignSelf: "center",
          flex: 1,
          zIndex: 1,
          width: "75%",
        }}
      >
        <View
          style={{
            height: 200,
            paddingTop: 50,
            alignSelf: "center",
            width: "100%",
          }}
        >
          <ProgressHorizontalBar />
        </View>
        <DaysDuration
          value={duration}
          setValue={setDuration}
          onBack={handleBack}
          onNext={handleNext}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
        }}
      >
        <Image source={require("../../../assets/images/forma_solta_2.png")} />
      </View>
    </SafeAreaView>
  );
}
