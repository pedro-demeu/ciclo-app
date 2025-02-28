/* eslint-disable prettier/prettier */
import React from "react";
import { render } from "@testing-library/react-native";
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
  it.only("when date selected then next button should be visible", () => {
    const { getByText, debug } = render(
      <CreateCalendar
        onBack={() => {}}
        onNext={() => {}}
        setSelectedDate={(date) => {}}
        selectedDate={null}
      />
    );

    const nextButton = getByText(/continuar/i);

    debug();
    expect(nextButton).not.toBeVisible();
  });
  it.todo("when no date selected then next button should be hidden");
  it.todo("when go back pressed then should go to home");
});
