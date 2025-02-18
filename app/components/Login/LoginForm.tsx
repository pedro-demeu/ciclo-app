import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { create } from "zustand";
import { Formik } from "formik";
import { z } from "zod";
import { Ionicons } from "@expo/vector-icons";

// Criando o estado global com Zustand
const useAuthStore = create((set) => ({
  email: "",
  senha: "",
  setCredentials: (email, senha) => set({ email, senha }),
}));

// Validação com Zod
const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export default function LoginForm() {
  const { setCredentials } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Formik
        initialValues={{ email: "", senha: "" }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          setCredentials(values.email, values.senha);
          console.log("Logando com:", values);
        }}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <View style={styles.formContainer}>
            {/* Input de E-mail */}
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#FF2255" />
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                value={values.email}
                onChangeText={handleChange("email")}
              />
            </View>
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            {/* Input de Senha */}
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#FF2255" />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                secureTextEntry
                value={values.senha}
                onChangeText={handleChange("senha")}
              />
            </View>
            {errors.senha && (
              <Text style={styles.errorText}>{errors.senha}</Text>
            )}

            {/* Botão de Login */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text
              style={{
                textAlign: "center",
                marginBottom: 15,
                marginTop: 25,
                fontFamily: "poppings",
                color: "#363636",
              }}
            >
              Esqueceu sua senha?
            </Text>
          </View>
        )}
      </Formik>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <View
          style={{
            position: "absolute",
            bottom: -245,
          }}
        >
          <Image
            source={require("../../../assets/images/login-botom.png")}
            style={{ alignSelf: "stretch" }}
          />
        </View>

        <View
          style={{
            position: "absolute",
            paddingBottom: 50,
            zIndex: 1000,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "poppings",
              textDecorationLine: "underline",
            }}
          >
            Não sou cadastrada
          </Text>
        </View>
      </View>
    </View>
  );
}

// Estilos com StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    paddingHorizontal: 20,
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "poppings",
    color: "#868686",
    marginBottom: 20,
    marginTop: 50,
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
    marginBottom: 30,
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
    marginBottom: 10,
    fontFamily: "poppings",
  },
  button: {
    backgroundColor: "#FF2255",
    paddingVertical: 20,
    borderRadius: 50,
    alignItems: "center",
    margin: "auto",
    width: "50%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "poppings",
  },
});
