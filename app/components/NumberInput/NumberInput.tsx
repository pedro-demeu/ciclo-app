import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface NumberInputProps {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
}
const NumberInput = ({
  value = 5,
  min = 0,
  max = 99,
  onChange,
}: NumberInputProps) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleIncrement = () => {
    if (value < max) {
      const newValue = value + 1;
      setInternalValue(newValue);
      onChange && onChange(newValue);
    }
  };

  const handleDecrement = () => {
    if (internalValue > min) {
      const newValue = internalValue - 1;
      setInternalValue(newValue);
      onChange && onChange(newValue);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleDecrement}
        style={styles.button}
        aria-label="minus"
      >
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
      <Text style={styles.valueText}>
        {String(internalValue).padStart(2, "0")}
      </Text>
      <TouchableOpacity
        onPress={handleIncrement}
        style={styles.button}
        aria-label="plus"
      >
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
