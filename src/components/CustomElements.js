import React from "react";
import styles from "../styles/CustomComponent/customebtn.module.css";

export function CustomButton({
  children = "Click Me",
  onClick,
  type = "button",
  className = "",
  buttonType = "primary",
}) {
  // Mapping สไตล์ปุ่ม
  const buttonStyle = {
    primary: styles["btn-primary"],
    secondary: styles["btn-secondary"],
    third: styles["btn-third"],
  };

  // รวมคลาสพื้นฐานและคลาสสไตล์ที่กำหนด
  const customClass = `${styles.btn} ${buttonStyle[buttonType]} ${className}`.trim();

  return (
    <button
      type={type}
      className={customClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
}