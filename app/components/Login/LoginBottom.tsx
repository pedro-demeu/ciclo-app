import { View, Image, Text, Pressable } from "react-native";

export default function LoginBottom() {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <View
        style={{
          bottom: -100,
          position: "absolute",
        }}
      >
        <Image
          source={require("../../../assets/images/login-botom.png")}
          style={{ alignSelf: "stretch" }}
        />
      </View>

      <Pressable>
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontFamily: "poppings",
            textDecorationLine: "underline",
            top: -220,
          }}
        >
          Não sou cadastrada
        </Text>
      </Pressable>
    </View>
  );
}
