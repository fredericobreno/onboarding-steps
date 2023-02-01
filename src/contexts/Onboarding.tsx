import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { steps } from "../steps";

type OnboardingContextType = {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
};

type OnboardingProviderProps = {
  children: React.ReactNode;
};

export const OnboardingContext = React.createContext(
  {} as OnboardingContextType
);

const OnboardingProvider: React.FC<OnboardingProviderProps> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  useEffect(() => {
    navigate(steps[currentStep].path);
  }, [currentStep]);

  // handling back button
  useEffect(() => {
    const stepIndex = steps.findIndex(
      (step) => step.path === location.pathname
    );
    if (stepIndex !== -1) {
      setCurrentStep(stepIndex);
    }
  }, [location]);

  return (
    <OnboardingContext.Provider value={{ currentStep, nextStep, prevStep }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export default OnboardingProvider;
