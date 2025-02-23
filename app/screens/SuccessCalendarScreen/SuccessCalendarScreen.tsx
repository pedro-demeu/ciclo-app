import { Text } from "react-native";

import LayoutContainer from "../../components/LayoutContainer/LayoutContainer";

export default function SuccessCalendarScreen() {
  return (
    <LayoutContainer>
      <Text
        style={{
          color: "#FFF",
          width: "75%",
          fontFamily: "poppins",
          fontSize: 22,
          textAlign: "center",
          alignSelf: "center",
          fontWeight: "100",
          marginBottom: 20,
        }}
      >
        Calendário criado com sucesso!
      </Text>
    </LayoutContainer>
  );
}
