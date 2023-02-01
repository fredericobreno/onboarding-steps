import React from "react";
import { Outlet } from "react-router-dom";
import useOnboarding from "../../hooks/useOnboarding";
import { steps } from "../../steps";
import styles from "./Root.module.scss";

const Root: React.FC = () => {
  const { currentStep } = useOnboarding();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.step}>
          Step {currentStep + 1} of {steps.length}
        </span>
        <div className={styles.progress}>
          {steps.map((step, index) => (
            <div
              key={step.path}
              className={`${styles.tile} ${
                currentStep === index ? styles.active : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
