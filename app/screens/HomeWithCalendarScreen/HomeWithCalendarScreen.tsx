import { Image, SafeAreaView, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeWithCalendarScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FF2255",
        justifyContent: "space-between",
      }}
    >
      <Image source={require("../../../assets/images/forma_solta.png")} />
      <View
        style={{
          position: "absolute",
          alignSelf: "center",
          flex: 1,
          zIndex: 1,
          width: "75%",
        }}
      >
        <View
          style={{
            borderRadius: 50,
            backgroundColor: "#fff",
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: 20,
            marginTop: 60,
            boxShadow: "0 2px 10px rgba(0,0,0, 0.2)",
          }}
        >
          <Pressable>
            <Ionicons name="camera" size={50} color="#444" />
          </Pressable>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            color: "#fff",
            fontSize: 24,
            fontFamily: "poppins",
            marginBottom: 20,
          }}
        >
          Sabrina <Text>Ellen</Text>
        </Text>

        <View
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 2px 10px rgba(0,0,0, 0.2)",
            width: "100%",
            borderTopLeftRadius: 70,
            borderBottomRightRadius: 70,
            flexDirection: "column",
            height: 250,
            marginTop: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                paddingLeft: 25,
                paddingTop: 50,
                width: "50%",
              }}
            >
              <Ionicons name="calendar" size={32} color="#FF2255" />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  marginTop: 10,
                  fontFamily: "poppins",
                }}
              >
                Dia 21 do ciclo
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "poppins",
                }}
              >
                hoje você pode sentir Náuseas, Cansada.
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#868686",
                height: 250,
                borderTopLeftRadius: 70,
                borderBottomRightRadius: 70,
                width: "50%",
                flexDirection: "column",
                justifyContent: "center",
                padding: 10,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Sua próxima menstruação será em
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  color: "#fff",
                  fontSize: 28,
                  fontWeight: "bold",
                }}
              >
                3 dias
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#8C031C",
              borderTopLeftRadius: 50,
              borderBottomRightRadius: 50,
              padding: 5,
              alignSelf: "center",
              width: "75%",
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "#FFF",
              }}
            >
              Ver calendário menstrual
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderRadius: 25,
            padding: 20,
            marginTop: 40,
            boxShadow: "0 2px 10px rgba(0,0,0, 0.2)",
          }}
        >
          <Ionicons
            name="share-social"
            size={22}
            color="#FF2255"
            style={{
              alignSelf: "flex-end",
              marginBottom: 5,
            }}
          />
          <Text
            style={{
              color: "#FF2255",
              fontWeight: "bold",
              fontSize: 18,
              fontFamily: "poppings",
              alignSelf: "flex-start",
            }}
          >
            Compartilhe{" "}
            <Text
              style={{
                color: "#444",
                fontWeight: "normal",
                fontFamily: "poppings",
                fontSize: 18,
              }}
            >
              o APP
            </Text>
          </Text>
          <Text
            style={{
              color: "#444",
              fontWeight: "normal",
              fontFamily: "poppings",
              fontSize: 17,
            }}
          >
            {" "}
            com suas amigas :)
          </Text>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
        }}
      >
        <Image source={require("../../../assets/images/forma_solta_2.png")} />
      </View>
    </SafeAreaView>
  );
}
