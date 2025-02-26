import { create } from "zustand";

export enum Intensity {
  LOW = "LOW",
  LOW_MEDIUM = "LOW_MEDIUM",
  MEDIUM = "MEDIUM",
  MEDIUM_HIGH = "MEDIUM_HIGH",
  HIGH = "HIGH",
}

export interface Step {
  id: number;
  done: boolean;
}

interface FormData {
  lastMenses?: string;
  duration?: number;
  intensity?: Intensity | null;
  durationCycle?: number;
  useContraceptive?: boolean;
  startDate?: string;
}

interface CreatingQueueState {
  currentStep: number;
  steps: { id: number; done: boolean }[];
  formData: FormData;
  prevStep: () => void;
  updateFormData: (data: FormData, step: Step) => void;
  resetFormData: () => void;
}

export const useCreatingQueue = create<CreatingQueueState>((set) => ({
  currentStep: 0,
  steps: [
    { id: 1, done: false },
    { id: 2, done: false },
    { id: 3, done: false },
    { id: 4, done: false },
    { id: 5, done: false },
  ],
  formData: {},
  prevStep: () =>
    set((state) => ({
      currentStep:
        state.currentStep > 0 ? state.currentStep - 1 : state.currentStep,
      steps: state.steps.map((step) =>
        // eslint-disable-next-line prettier/prettier
        step.id === state.currentStep - 1
          ? { ...step, done: false }
          : // eslint-disable-next-line prettier/prettier
            { ...step, done: true }
      ),
    })),
  updateFormData: (data, step) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
      currentStep: state.currentStep + 1,
      steps: state.steps
        .filter((s) => s.id !== step.id)
        .concat({ ...step, done: true }),
    })),

  resetFormData: () =>
    set({
      currentStep: 0,
      formData: {},
    }),
}));
