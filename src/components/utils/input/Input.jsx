import React from "react";
import { useThemeContext } from "../../../hooks/themeHook/themeHook";

const Input = ({ type, placeholder, focus = false, value, onChange }) => {

  const { dark, toggleTheme } = useThemeContext();
  // Input styles
  const baseStyles = {
    backgroundColor: "transparent",
    width: "100%",
    height: "20px",
    margin: "10px 0px",
    paddingTop: "10px",
    paddingBottom: "10px",
    border: "none",
    borderBottom: "1px solid var(--borderInput)",
    outline: "none",
    fontSize: "16px",
    color: "var(--textPrimary)",
  };

  const focusedStyles = {
    border: "none",
    borderRadius: "5px",
    borderBottom: "0.5px solid #1db954",
    boxShadow: "0 2px 1px 0px #1db954",
  };

  const styles = {
    ...(focus ? focusedStyles : {}), // Apply focused styles conditionally
    ...baseStyles,
  };

  // Date input styles
  const dateStyles={
    backgroundColor: "transparent",
    width: "100%",
    height: "20px",
    margin: "10px 0px",
    paddingTop: "10px",
    paddingBottom: "10px",
    border: "none",
    borderBottom: "1px solid",
    outline: "none",
    fontSize: "16px",
    opacity: "0.7",
  }

  const dateIconStyles = {
    WebkitAppearance: "none",
    MozAppearance: "none",
    filter: dark ? "invert(1)" : "invert(0)",
    opacity: "0.7", // Agrega transparencia al color del texto
  };
  const dateInputStyles = {
    ...dateIconStyles,
    padding: "10px 0px",
  };

  const stylesInputDate = {
    ...(focus ? focusedStyles : {}), // Apply focused styles conditionally
    ...(type === "date" ? dateInputStyles : {}), // Apply date input styles conditionally
    ...dateStyles,
  };

  return (
    <>
      {type === "date" ? (
        <input
          type={type}
          style={stylesInputDate}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          style={styles}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  );
};

export default Input;
