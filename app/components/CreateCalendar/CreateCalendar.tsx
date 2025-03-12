import { SetStateAction, useState } from "react";
import { View, Text } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import Bottom from "../Bottom/Bottom";

interface CreateCalendarProps {
  selectedDate?: string | null;
  setSelectedDate: (date: string) => void;
  onBack: () => void;
  onNext: () => void;
}
export default function CreateCalendar({
  onBack,
  onNext,
  setSelectedDate,
  selectedDate,
}: CreateCalendarProps) {
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        justifyContent: "flex-start",
      }}
    >
      <Text
        style={{
          position: "absolute",
          color: "white",
          fontFamily: "poppings",
          textAlign: "center",
          alignSelf: "center",
          fontSize: 22,
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
          marginTop: 70,
          marginBottom: 20,
          backgroundColor: "#FEFEFE",
          borderRadius: 20,
          shadowOpacity: 0.1,
          paddingTop: 25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Calendar
          style={{
            borderRadius: 0,
            height: 350,
          }}
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "#FEFEFE",
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#FF2255",
            selectedDayTextColor: "#FFFFFF",
            todayTextColor: "#FF2255",
            dayTextColor: "#2d4150",
          }}
          onDayPress={(day: { dateString: SetStateAction<string | null> }) => {
            setSelectedDate(day.dateString as string);
            day.dateString && setNextButtonEnabled(true);
          }}
          markedDates={{
            [String(selectedDate)]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "orange",
            },
          }}
        />
        <View
          style={{
            backgroundColor: "#FEFEFE",
            paddingHorizontal: 20,
            marginTop: 10,
            width: "100%",
            marginBottom: 20,
          }}
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
