import { useState } from "react";

export const useSteps = (totalSteps = 4) => {
  const [currentStep, setCurrentStep] = useState(1);

  const gotoStep = (step) => {
    if (step > totalSteps && step < 1) return;
    setCurrentStep(step);
  };

  const nextStep = () =>
    setCurrentStep((curr) => (curr < totalSteps ? curr + 1 : curr));

  const prevStep = () => setCurrentStep((curr) => (curr > 1 ? curr - 1 : curr));

  return {
    currentStep,
    gotoStep,
    nextStep,
    prevStep,
  };
};
