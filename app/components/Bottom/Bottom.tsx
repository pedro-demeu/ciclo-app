import { Pressable, Text } from "react-native";

interface BottomProps {
  label: string;
  onPress: () => void;
}
export default function Bottom({ label, onPress }: BottomProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: "100%",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "poppings",
          fontSize: 14,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
