import { View, Text } from "react-native";

import { StyleSheet } from "react-native";

export default function LoginHeader({ title }: { title: string }) {
  const styles = StyleSheet.create({
    heading: {
      color: "#FFF",
      fontSize: 34,
      fontFamily: "poppings",
    },
  });

  return (
    <View
      style={{
        justifyContent: "center",
        width: "100%",
        height: "20%",
        alignItems: "center",
      }}
    >
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
}
