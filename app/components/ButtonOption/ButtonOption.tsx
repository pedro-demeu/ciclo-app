import { Text, TouchableOpacity } from "react-native";

export default function ButtonOption({
  name,
  onPress,
  selected,
}: {
  name: string;
  onPress: () => void;
  selected: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: selected ? "#4BA4F2" : "#FFF",
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
          color: selected ? "#FFF" : "#FF2255",
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
