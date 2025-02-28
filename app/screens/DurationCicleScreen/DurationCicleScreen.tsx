import { SafeAreaView, View, Image } from "react-native";
import ProgressHorizontalBar from "../../components/ProgressCreatingCalendar/ProgressHorizontalBar";
import { useState } from "react";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../stack/RootStack";
import { useCalendarFormContext } from "@/app/contexts/FormData";
import CicleDuration from "@/app/components/CicleDuration/CicleDuration";

export default function DurationCicleScreen() {
  const [duration, setDuration] = useState(21);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { updateFormData, goBack } = useCalendarFormContext();
  const handleNext = () => {
    navigation.navigate("contraceptive");
    updateFormData({ duration }, { id: 4, done: true });
  };

  const handleBack = () => {
    goBack();
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
        <CicleDuration
          onBack={handleBack}
          onNext={handleNext}
          value={duration}
          setValue={setDuration}
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
