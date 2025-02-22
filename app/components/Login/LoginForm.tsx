import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/app/stack/RootStack";

// Validação com Zod
const validationSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type DataForm = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (data: DataForm) => {
    navigation.navigate("welcome");
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View
                style={[
                  styles.inputContainer,
                  {
                    borderColor: !!errors.email?.message ? "#FF2255" : "#CCC",
                  },
                ]}
              >
                <Ionicons name="mail-outline" size={20} color="#FF2255" />
                <TextInput
                  style={[
                    styles.input,
                    {
                      color: !!errors.email?.message ? "#FF2255" : "#999",
                    },
                  ]}
                  placeholder="E-mail"
                  placeholderTextColor={
                    !!errors.password?.message ? "#FF2255" : "#999"
                  }
                  keyboardType="email-address"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              </View>
            )}
          />
          {errors.email?.message && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <View
                style={[
                  styles.inputContainer,
                  {
                    borderColor: !!errors.password?.message
                      ? "#FF2255"
                      : "#CCC",
                  },
                ]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#FF2255"
                />
                <TextInput
                  style={[
                    styles.input,
                    {
                      color: !!errors.password?.message ? "#FF2255" : "#999",
                    },
                  ]}
                  placeholder="Senha"
                  placeholderTextColor={
                    !!errors.password?.message ? "#FF2255" : "#999"
                  }
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                />
              </View>
            )}
          />

          {errors.password?.message && (
            <Text style={styles.errorText}>{errors.password?.message}</Text>
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <Text
            style={{
              textAlign: "center",
              paddingBottom: 15,
              paddingTop: 25,
              fontFamily: "poppings",
              color: "#363636",
              zIndex: 1,
            }}
            // onPress={() => navigation.navigate("")}
          >
            Esqueceu sua senha?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Estilos com StyleSheet.create
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FF2255",
    paddingTop: 20,
  },
  subContainer: {
    backgroundColor: "#FFF",
    paddingHorizontal: 25,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    width: "100%",
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "poppings",
    color: "#868686",
    alignSelf: "center",
    marginBottom: 20,
  },
  formContainer: {
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: "#f5f5f5",
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: 10,
    color: "#333",
    backgroundColor: "#f5f5f5",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    paddingBottom: 30,
    fontFamily: "poppings",
    marginLeft: 25,
  },
  button: {
    backgroundColor: "#FF2255",
    paddingVertical: 20,
    borderRadius: 50,
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "poppings",
  },
});
