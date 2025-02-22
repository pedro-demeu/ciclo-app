/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useState } from "react";

interface Step {
  id: number;
  done: boolean;
}

interface StepContextType {
  currentStep: number;
  steps: Step[];
  nextStep: () => void;
  updateStep: (stepId: number, done: boolean) => void;
}

const StepContext = createContext<StepContextType>({} as StepContextType);

const StepProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState<Step[]>([
    { id: 1, done: false },
    { id: 2, done: false },
    { id: 3, done: false },
    { id: 4, done: false },
    { id: 5, done: false },
  ]);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const updateStep = (stepId: number, done: boolean) => {
    setSteps((prevSteps) =>
      prevSteps.map((step) => (step.id === stepId ? { ...step, done } : step))
    );
  };

  return (
    <StepContext.Provider value={{ currentStep, steps, nextStep, updateStep }}>
      {children}
    </StepContext.Provider>
  );
};

export const useSteps = () => useContext(StepContext);
export default StepProvider;
