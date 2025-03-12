import { Image, SafeAreaView, Text, View } from "react-native";

import Button from "../../components/Button/Button";
import Bottom from "../../components/Bottom/Bottom";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/app/stack/RootStack";
import { useCallback, useEffect } from "react";
import { useCalendarFormContext } from "@/app/contexts/FormData";
import { useCalendarServices } from "@/app/services/useCalendarServices";

export default function SuccessCalendarScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { resetFormData, formData } = useCalendarFormContext();
  const { create } = useCalendarServices();

  const handleSave = useCallback(async () => {
    await create(formData);
  }, [create, formData]);

  useEffect(() => {
    handleSave();

    return () => {
      resetFormData();
    };
  }, [resetFormData, handleSave]);

  //TODO: clean up the Stack Navigation when exit
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Image source={require("../../../assets/images/forma_solta_5.png")} />
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          alignSelf: "center",
          flex: 1,
          marginTop: 140,
        }}
      >
        <Image
          style={{
            alignSelf: "center",
          }}
          source={require("../../../assets/images/Success.png")}
        />
        <Text
          style={{
            color: "#555",
            fontWeight: "bold",
            width: "70%",
            fontFamily: "poppins",
            fontSize: 24,
            textAlign: "center",
            alignSelf: "center",
            marginBottom: 60,
          }}
        >
          Calendário criado com sucesso!
        </Text>

        <View
          style={{
            width: "60%",
            marginTop: 20,
            marginBottom: 60,
            alignSelf: "center",
          }}
        >
          <Button
            label="Ver calendário"
            onPress={() => {
              navigation.navigate("calendarScreen");
            }}
          />
        </View>
        <Bottom
          label="Ir para Home"
          onPress={() => {
            navigation.navigate("home");
          }}
        />
      </View>
      <Image
        style={{
          position: "absolute",
          bottom: 0,
        }}
        source={require("../../../assets/images/forma_solta_6.png")}
      />
    </SafeAreaView>
  );
}
