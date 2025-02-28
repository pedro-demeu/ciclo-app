/* eslint-disable prettier/prettier */
import React from "react";
import { act, fireEvent, render } from "@testing-library/react-native";
import DaysDuration from "../../components/DaysDuration/DaysDuration";
jest.mock("expo-font");

describe("DaysDuration - Unit Tests", () => {
  it("when the plus icon is pressed, it should increase duration value", () => {
    const setValueMock = jest.fn();

    const { getByLabelText, getByText } = render(
      <DaysDuration
        value={5}
        onBack={() => {}}
        onNext={() => {}}
        setValue={setValueMock}
      />
    );

    act(() => {
      const value = getByText(/05/);
      expect(value).toBeVisible();

      const plusButton = getByLabelText(/plus/i);
      fireEvent.press(plusButton);
    });
    expect(setValueMock).toHaveBeenCalledWith(6);

    const updatedValue = getByText(/06/);
    expect(updatedValue).toBeVisible();
  });
  it("when the minus icon is pressed, it should reduce duration value", () => {
    const setValueMock = jest.fn();

    const { getByLabelText, getByText } = render(
      <DaysDuration
        value={5}
        onBack={() => {}}
        onNext={() => {}}
        setValue={setValueMock}
      />
    );

    act(() => {
      const value = getByText(/05/);
      expect(value).toBeVisible();

      const plusButton = getByLabelText(/minus/i);
      fireEvent.press(plusButton);
    });
    expect(setValueMock).toHaveBeenCalledWith(4);

    const updatedValue = getByText(/04/);
    expect(updatedValue).toBeVisible();
  });
  it("default value should be 5 days duration", () => {
    const setValueMock = jest.fn();

    const { getByText } = render(
      <DaysDuration
        value={5}
        onBack={() => {}}
        onNext={() => {}}
        setValue={setValueMock}
      />
    );

    const value = getByText(/05/);
    expect(value).toBeVisible();
  });
});
