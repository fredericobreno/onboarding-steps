import React, { useEffect } from "react";
import styles from "./Input.module.scss";

interface IInput {
  name: string;
  label: string;
  type: string;
  helpText?: string;
  options?: {
    value: string;
    label: string;
  }[];
  setValid?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input: React.FC<IInput> = (props) => {
  const { label, name, type, helpText, options, setValid } = props;
  const [value, setValue] = React.useState<string>("");

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValid?.(value.length > 0);
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {type === "input" && (
        <input
          name={name}
          id={name}
          className={styles.input}
          value={value}
          onChange={handleInputChange}
        />
      )}
      {type === "select" && (
        <select
          name={name}
          id={name}
          className={styles.input}
          value={value}
          onChange={handleInputChange}
        >
          <option value=""></option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
      {helpText && <p className={styles.helpText}>{helpText}</p>}
    </div>
  );
};

export default Input;
