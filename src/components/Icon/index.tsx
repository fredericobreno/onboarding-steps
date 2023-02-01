import React from "react";
import styles from "./Icon.module.scss";

export interface IIcon {
  name: string;
  text: string;
}

const Icon: React.FC<IIcon> = (props) => {
  const { name, text } = props;

  return (
    <div className={styles.wrapper}>
      <img
        src={`../../assets/svgs/${name}.svg`}
        alt={name}
        className={styles.icon}
      />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Icon;
