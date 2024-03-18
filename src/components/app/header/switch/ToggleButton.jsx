import React, { useMemo } from "react";
import { useThemeContext } from "../../../../hooks/themeHook/themeHook";
import "./ToggleButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ToggleButton = () => {
  const { dark, toggleTheme } = useThemeContext();

  const ToggleThemeIcon = useMemo(() => (dark ? faSun : faMoon), [dark]);
  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onClick={toggleTheme}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <FontAwesomeIcon icon={faMoon} className="fa-moon" />
        <FontAwesomeIcon icon={faSun} className="fa-sun" />
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
