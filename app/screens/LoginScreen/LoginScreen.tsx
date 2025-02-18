import { StyleSheet, View } from "react-native";
import LoginForm from "../../components/Login/LoginForm";
import LoginHeader from "../../components/Login/LoginHeader";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LoginHeader title="Ciclo" />
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
