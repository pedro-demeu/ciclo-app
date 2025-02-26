import { SafeAreaView, View, Image, Text } from "react-native";
import ProgressHorizontalBar from "../../components/ProgressCreatingCalendar/ProgressHorizontalBar";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { SetStateAction, useState } from "react";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../stack/RootStack";
import Bottom from "../../components/Bottom/Bottom";
import { useCalendarFormContext } from "@/app/contexts/FormData";

export interface Step {
  id: number;
  done: boolean;
}

LocaleConfig.locales["pt-BR"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abril",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out.",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  today: "Hoje",
};

LocaleConfig.defaultLocale = "pt-BR";

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

        <Text
          style={{
            position: "absolute",
            color: "white",
            fontFamily: "poppings",
            textAlign: "center",
            alignSelf: "center",
            fontSize: 22,
            marginTop: 200,
            fontWeight: "100",
          }}
        >
          Qual a data da sua{" "}
          <Text
            style={{
              fontWeight: "bold",
              fontFamily: "poppings",
            }}
          >
            última
          </Text>{" "}
          menstruação?
        </Text>

        <View
          style={{
            marginTop: 100,
            marginBottom: 60,
          }}
        >
          <Calendar
            style={{
              borderRadius: 19,
              height: 350,
              shadowColor: "#000",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            theme={{
              backgroundColor: "#ffffff",
              calendarBackground: "#ffffff",
              textSectionTitleColor: "#b6c1cd",
              selectedDayBackgroundColor: "#FF2255",
              selectedDayTextColor: "#FFFFFF",
              todayTextColor: "#FF2255",
              dayTextColor: "#2d4150",
            }}
            onDayPress={(day: {
              dateString: SetStateAction<string | null>;
            }) => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [String(selected)]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
              },
            }}
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
