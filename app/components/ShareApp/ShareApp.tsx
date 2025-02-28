import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function ShareApp() {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        borderRadius: 25,
        padding: 20,
        marginTop: 80,
        boxShadow: "0 2px 10px rgba(0,0,0, 0.2)",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text
          style={{
            color: "#FF2255",
            fontSize: 18,
            fontFamily: "poppings",
            alignSelf: "flex-start",
          }}
        >
          Compartilhe{" "}
          <Text
            style={{
              color: "#444",
              fontWeight: "normal",
              fontFamily: "poppings",
              fontSize: 18,
            }}
          >
            o APP
          </Text>
        </Text>
        <Text
          style={{
            color: "#444",
            fontWeight: "normal",
            fontFamily: "poppings",
            fontSize: 17,
          }}
        >
          {" "}
          com suas amigas :)
        </Text>
      </View>

      <Ionicons
        name="share-social"
        size={30}
        color="#FF2255"
        style={{
          marginBottom: 5,
        }}
      />
    </View>
  );
}
