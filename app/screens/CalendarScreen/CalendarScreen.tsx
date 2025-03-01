/* eslint-disable prettier/prettier */
import { useNavigation } from "expo-router";
import Bottom from "../../components/Bottom/Bottom";
import LayoutHome from "../../components/LayoutHome/LayoutHome";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../stack/RootStack";
export default function CalendarScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Definindo datas com diferentes marcações
  const datesConfig = [
    { date: "2025-02-01", marked: true },
    { date: "2025-02-05", selected: true },
    { date: "2025-02-10", marked: true },
    { date: "2025-02-15", selected: true },
    { date: "2025-02-20", marked: true },
    { date: "2025-02-25", selected: true },
    { date: "2025-02-28", marked: true },
  ];

  // Transformar a lista em um objeto markedDates
  const markedDates = datesConfig.reduce(
    (acc, { date, marked, selected }) => {
      acc[date] = {
        marked: marked || false,
        dotColor: marked ? "red" : undefined,
        selected: selected || false,
        selectedColor: selected ? "red" : undefined,
      };
      return acc;
    },
    {} as Record<string, any>
  );

  return (
    <LayoutHome>
      <Text
        style={{
          fontFamily: "poppings",
          color: "white",
          alignSelf: "center",
          marginTop: 100,
          marginBottom: 25,
          fontSize: 22,
          maxWidth: "70%",
        }}
      >
        Baixa probabilidade de engravidar
      </Text>

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
        markedDates={markedDates}
      />

      <View>
        <Text>Menstruação</Text>
        <Text>Período fértil (Ovulação)</Text>
      </View>

      <View
        style={{
          marginTop: 40,
          gap: 20,
        }}
      >
        <Bottom label="Editar calendário" onPress={() => {}} />
        <Bottom
          label="Voltar"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </LayoutHome>
  );
}
