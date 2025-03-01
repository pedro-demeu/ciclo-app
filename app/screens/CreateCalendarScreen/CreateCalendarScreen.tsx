import { SafeAreaView, View, Image } from "react-native";
import ProgressHorizontalBar from "../../components/ProgressCreatingCalendar/ProgressHorizontalBar";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../stack/RootStack";
import { useCalendarFormContext } from "@/app/contexts/FormData";
import CreateCalendar from "@/app/components/CreateCalendar/CreateCalendar";
import { useState } from "react";

export interface Step {
  id: number;
  done: boolean;
}

export default function CreateCalendarScreen() {
  const { updateFormData } = useCalendarFormContext();
  const [selected, setSelected] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNext = () => {
    navigation.navigate("duration");
    selected && updateFormData({ lastMenses: selected }, { id: 1, done: true });
  };

  const handleBack = () => {
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

        <CreateCalendar
          selectedDate={selected}
          setSelectedDate={setSelected}
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
