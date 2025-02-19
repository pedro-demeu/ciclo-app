import { StyleSheet, View } from "react-native";
import LoginForm from "@/app/components/Login/LoginForm";
import LoginHeader from "@/app/components/Login/LoginHeader";
import LoginBottom from "@/app/components/Login/LoginBottom";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LoginHeader title="Ciclo" />
      <LoginForm />
      <LoginBottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
