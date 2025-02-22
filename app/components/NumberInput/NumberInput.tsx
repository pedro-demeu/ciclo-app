import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const NumberInput = ({ initialValue = 5, min = 0, max = 99, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    if (value < max) {
      const newValue = value + 1;
      setValue(newValue);
      onChange && onChange(newValue);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      const newValue = value - 1;
      setValue(newValue);
      onChange && onChange(newValue);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrement} style={styles.button}>
        <Text style={styles.buttonText}>
          <Icon
            name="minus"
            style={{
              color: "#FF2255",
              fontSize: 22,
            }}
          />
        </Text>
      </TouchableOpacity>
      <Text style={styles.valueText}>{String(value).padStart(2, "0")}</Text>
      <TouchableOpacity onPress={handleIncrement} style={styles.button}>
        <Text style={styles.buttonText}>
          <Icon
            name="plus"
            style={{
              color: "#FF2255",
              fontSize: 22,
            }}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: "poppings",
    fontWeight: "bold",
    color: "#FF2D55",
  },
  valueText: {
    marginHorizontal: 20,
    fontSize: 25,
    fontFamily: "poppings",
    fontWeight: "bold",
    color: "#FF2D55",
  },
});

export default NumberInput;

// Você pode usar assim:
// <NumberInput initialValue={5} min={0} max={10} onChange={(val) => console.log(val)} />
