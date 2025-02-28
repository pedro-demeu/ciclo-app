/* eslint-disable prettier/prettier */
import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { CreateCalendar } from "../../components/CreateCalendar/CreateCalendar";

describe("CreateCalendar - Unit Tests", () => {
  it("when date selected then next button should be visible", () => {
    const { getByText } = render(
      <CreateCalendar
        onBack={() => {}}
        onNext={() => {}}
        setSelectedDate={(date) => {}}
        selectedDate={null}
      />
    );

    const nextButton = getByText(/continuar/i);
    expect(nextButton).not.toBeVisible();

    fireEvent.press(getByText("10"));

    expect(nextButton).toBeVisible();
  });
  it("when go back pressed then should onBack callback called", () => {
    const onBackMock = jest.fn(); // Mock the onBack callback

    const { getByText } = render(
      <CreateCalendar
        onBack={onBackMock}
        onNext={() => {}}
        setSelectedDate={(date) => {}}
        selectedDate={null}
      />
    );

    const backButton = getByText(/voltar/i);
    fireEvent.press(backButton);
    expect(onBackMock).toHaveBeenCalledTimes(1);
  });
});
