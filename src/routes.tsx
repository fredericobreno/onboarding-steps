import { createBrowserRouter } from "react-router-dom";
import Step from "./components/Step";
import OnboardingProvider from "./contexts/Onboarding";
import NotFound from "./screens/NotFound";
import Root from "./screens/Root";
import { steps } from "./steps";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <OnboardingProvider>
        <Root />
      </OnboardingProvider>
    ),
    errorElement: <NotFound />,
    children: steps.map((step, index) => ({
      path: step.path,
      element: (
        <Step {...step} {...(index === 0 && { buttonText: step.buttonText })} />
      ),
    })),
  },
]);
