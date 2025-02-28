/* eslint-disable prettier/prettier */
import React from "react";
import { act, fireEvent, render } from "@testing-library/react-native";
import CicleDuration from "../../components/CicleDuration/CicleDuration";
jest.mock("expo-font");

describe("CicleDuration - Unit Tests", () => {
  it("when the plus icon is pressed, it should increase duration value", () => {
    const setValueMock = jest.fn();

    const { getByLabelText, getByText } = render(
      <CicleDuration
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
      <CicleDuration
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
  it("default value should be 21 days duration", () => {
    const setValueMock = jest.fn();

    const { getByText } = render(
      <CicleDuration
        value={21}
        onBack={() => {}}
        onNext={() => {}}
        setValue={setValueMock}
      />
    );

    const value = getByText(/21/);
    expect(value).toBeVisible();
  });

  it("correct questions should be visible", () => {
    const { getByText } = render(
      <CicleDuration
        onBack={() => {}}
        onNext={() => {}}
        setValue={(n: number) => {}}
        value={21}
      />
    );

    expect(getByText("Quantos dias dura seu ciclo?")).toBeVisible();
  });
});
