import React from "react";

const Input = ({ type, placeholder, focus = false, value, onChange  }) => {
  const baseStyles = {
    width: "100%",
    height: "20px",
    margin: "10px 0px",
    paddingTop: "10px",
    paddingBottom: "10px",
    outline: "none",
    fontSize: "16px",
  };

  const focusedStyles = {
    border: "none",
    borderRadius: "5px",
    borderBottom: "0.5px solid #1db954",
    boxShadow: "0 2px 1px 0px #1db954",
  };

  const styles = {
    ...baseStyles,
    ...(focus ? focusedStyles : {}), // Apply focused styles conditionally
    border: "none", // Ensure consistent border handling (remove default for underline)
    borderBottom: focus ? "none" : "1px solid #000", // Set underline for non-focused state
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={styles}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;