import { useCalendarFormContext } from "@/app/contexts/FormData";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ProgressHorizontalBar() {
  const { steps } = useCalendarFormContext();

  console.log({
    steps,
  });
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {steps.map((step, index) => (
          <View key={step.id} style={styles.circleContainer}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: "#FFF",
                backgroundColor: step.done ? "#fff" : "transparent",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {step.done ? (
                <Icon
                  name="check"
                  style={{
                    color: "#FF2255",
                  }}
                />
              ) : (
                <View style={styles.subCircle} />
              )}
            </View>
            {index + 1 < steps.length && <View style={styles.rightLine} />}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  circleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#FFF",
    backgroundColor: "transparent",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subCircle: {
    width: 10,
    position: "relative",
    alignSelf: "center",
    height: 10,
    borderRadius: 100,
    backgroundColor: "#FFF",
  },
  rightLine: {
    height: 3,
    width: 25,
    backgroundColor: "#FFF",
  },
});
