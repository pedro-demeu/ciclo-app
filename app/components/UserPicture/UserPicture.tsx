import { Ionicons } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";

export default function UserPicture() {
  return (
    <View>
      <View
        style={{
          borderRadius: 75,
          backgroundColor: "#fff",
          width: 125,
          height: 125,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginBottom: 20,
          marginTop: 60,
          boxShadow: "0 2px 10px rgba(0,0,0, 0.2)",
        }}
      >
        <Pressable>
          <Ionicons name="camera" size={75} color="#444" />
        </Pressable>
      </View>
      <Text
        style={{
          fontWeight: "bold",
          alignSelf: "center",
          color: "#fff",
          fontSize: 24,
          fontFamily: "poppins",
          marginBottom: 20,
        }}
      >
        Sabrina <Text>Ellen</Text>
      </Text>
    </View>
  );
}
