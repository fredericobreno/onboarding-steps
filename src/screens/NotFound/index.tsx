import React from "react";
import { useRouteError } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  const error = useRouteError() as any;

  return (
    <div className={styles.wrapper}>
      <h1>Oops!</h1>
      <p>This page doesn't exist.</p>
      <p
        style={{
          opacity: 0.5,
        }}
      >
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFound;
