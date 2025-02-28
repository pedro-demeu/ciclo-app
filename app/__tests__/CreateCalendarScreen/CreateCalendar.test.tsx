/* eslint-disable prettier/prettier */
import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { CreatingQueueState } from "../../contexts/FormData";
import { create } from "../../setupTests";
import { CreateCalendar } from "@/app/components/CreateCalendar";

create<CreatingQueueState>((set) => ({
  currentStep: 0,
  steps: [
    { id: 1, done: false },
    { id: 2, done: false },
    { id: 3, done: false },
    { id: 4, done: false },
    { id: 5, done: false },
  ],
  formData: {
    name: "hello",
  },
  goBack: () =>
    set((state) => ({
      currentStep:
        state.currentStep > 0 ? state.currentStep - 1 : state.currentStep,
      steps: state.steps
        .map((s) => {
          if (s.id === state.currentStep) {
            return { ...s, done: false };
          }
          return s;
        })
        .sort((a, b) => a.id - b.id),
    })),
  updateFormData: (data, step) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
      currentStep: state.currentStep + 1,
      steps: state.steps
        .filter((s) => s.id !== step.id)
        .concat({ ...step, done: true })
        .sort((a, b) => a.id - b.id),
    })),

  resetFormData: () =>
    set({
      currentStep: 0,
      formData: {},
    }),
}));
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
