import { SafeAreaView, View, Image } from "react-native";
import ProgressHorizontalBar from "../ProgressCreatingCalendar/ProgressHorizontalBar";
import { useSteps } from "../../contexts/StepContext";

interface LayoutContainerProps {
  children: React.ReactNode;
}

export default function LayoutContainer({ children }: LayoutContainerProps) {
  const { steps } = useSteps();
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
            height: 200,
            paddingTop: 50,
            alignSelf: "center",
            width: "100%",
          }}
        >
          <ProgressHorizontalBar stepList={steps} />
        </View>
        {children}
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
