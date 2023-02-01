import React from "react";
import styles from "./Button.module.scss";

interface IButton {
  text: string;
  type: "primary" | "secondary" | "disabled";
  onClick: () => void;
  valid?: boolean;
}

const Button: React.FC<IButton> = (props) => {
  const { text, type, onClick, valid = true } = props;

  return (
    <a
      className={`${styles.button} ${styles[type]}`}
      onClick={() => valid && onClick()}
    >
      {text}
    </a>
  );
};

export default Button;
