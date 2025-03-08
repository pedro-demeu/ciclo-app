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

      <View
        style={{
          backgroundColor: "#FEFEFE",
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: { width: 2, height: 2 },
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
          markedDates={markedDates}
        />

        <View
          style={{
            backgroundColor: "#FEFEFE",
            paddingHorizontal: 20,
            marginTop: 10,
            width: "100%",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <View
                style={{
                  height: 22,
                  width: 22,
                  marginRight: 5,
                  backgroundColor: "red",
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {new Date().getDate() || 10}
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 12,
                }}
              >
                Menstruação
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <View
                style={{
                  height: 22,
                  width: 22,
                  marginRight: 5,
                  backgroundColor: "transparent",
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#111",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {new Date().getDate() || 10}
                </Text>

                <View
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor: "red",
                    borderRadius: 50,
                  }}
                />
              </View>

              <Text
                style={{
                  fontSize: 12,
                }}
              >
                Período fértil (Ovulação)
              </Text>
            </View>
          </View>
        </View>
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
