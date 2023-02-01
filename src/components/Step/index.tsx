import React, { useEffect } from "react";
import useOnboarding from "../../hooks/useOnboarding";
import Button from "../Button";
import Icon, { IIcon } from "../Icon";
import Input from "../Input";
import styles from "./Step.module.scss";

export interface IStep {
  title: string;
  subtitle: string;
  icons?: IIcon[];
  buttonText?: string;
  form?: {
    field: {
      label: string;
      type: string;
      name: string;
      helpText?: string;
      options?: {
        value: string;
        label: string;
      }[];
    };
  };
}

const Step: React.FC<IStep> = (props) => {
  const { title, subtitle, icons, buttonText, form } = props;
  const { prevStep, nextStep } = useOnboarding();
  const [valid, setValid] = React.useState<boolean>(false);

  useEffect(() => {
    setValid(!form);
  }, [form]);

  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
      {icons && (
        <div className={styles.iconWrapper}>
          {icons.map((icon) => (
            <Icon key={icon.name} {...icon} />
          ))}
        </div>
      )}
      {form && <Input {...form.field} setValid={setValid} />}
      {buttonText ? (
        <div className={`${styles.buttonWrapper} ${styles.buttonCenter}`}>
          <Button
            text={buttonText}
            type="primary"
            onClick={nextStep}
            valid={valid}
          />
        </div>
      ) : (
        <div className={styles.buttonWrapper}>
          <Button
            text="Back"
            type="secondary"
            onClick={prevStep}
          />
          <Button
            text="Next"
            type={valid ? "primary" : "disabled"}
            onClick={nextStep}
            valid={valid}
          />
        </div>
      )}
    </div>
  );
};

export default Step;
