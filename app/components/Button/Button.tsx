import { Pressable, Text } from "react-native";

interface ButtonProps {
  label: string;
  onPress: () => void;
}
export default function Button({ label, onPress }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: "100%",
        borderRadius: 50,
        height: 80,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        alignSelf: "center",
      }}
    >
      <Text>{label}</Text>
    </Pressable>
  );
}
