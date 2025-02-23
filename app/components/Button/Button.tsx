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
        height: 60,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
