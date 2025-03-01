import { RootStackParamList } from "../../stack/RootStack";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { View, Text } from "react-native";

export default function PreviewCalendar() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0, 0.2)",
        width: "100%",
        borderTopLeftRadius: 70,
        borderBottomRightRadius: 70,
        flexDirection: "column",
        height: 250,
        marginTop: 40,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            paddingLeft: 25,
            paddingTop: 50,
            width: "50%",
          }}
        >
          <Ionicons name="calendar" size={32} color="#FF2255" />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginTop: 10,
              fontFamily: "poppins",
            }}
          >
            Dia 21 do ciclo
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "poppins",
            }}
          >
            hoje você pode sentir Náuseas, Cansada.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#868686",
            height: 250,
            borderTopLeftRadius: 70,
            borderBottomRightRadius: 70,
            width: "50%",
            flexDirection: "column",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "#fff",
              fontSize: 16,
            }}
          >
            Sua próxima menstruação será em
          </Text>
          <Text
            style={{
              alignSelf: "center",
              color: "#fff",
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            3 dias
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#8C031C",
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 50,
          padding: 5,
          alignSelf: "center",
          width: "75%",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            color: "#FFF",
            fontWeight: "bold",
          }}
          onPress={() => {
            navigation.navigate("calendarScreen");
          }}
        >
          Ver calendário menstrual
        </Text>
      </View>
    </View>
  );
}
