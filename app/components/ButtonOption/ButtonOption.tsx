import { Text, TouchableOpacity } from "react-native";

export default function ButtonOption({
  name,
  onPress,
}: {
  name: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Text
        style={{
          color: "#FF2255",
          fontFamily: "poppins",
          fontSize: 16,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
