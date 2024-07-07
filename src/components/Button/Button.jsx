import React from "react";
import styles from "./Button.module.css"; 

const Button = ({ label, onClick, className }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
