import { useContext } from "react";
import { OnboardingContext } from "../contexts/Onboarding";

const useOnboarding = () => useContext(OnboardingContext);

export default useOnboarding;
