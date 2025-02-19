import { View, Image, Text, Pressable } from "react-native";

export default function LoginBottom() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Pressable>
        <Text
          style={{
            textAlign: "center",
            color: "blue",
            fontFamily: "poppings",
            textDecorationLine: "underline",
            zIndex: 1,
          }}
        >
          Não sou cadastrada
        </Text>
      </Pressable>
      <Image source={require("../../../assets/images/login-botom.png")} />
    </View>
  );
}
