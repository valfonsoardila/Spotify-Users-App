import React, { useMemo } from "react";
import { useThemeContext } from "../../../hooks/themeHook/themeHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./ButtonToggleTheme.css";

const ButtonToggleTheme = () => {
  const { dark, toggleTheme } = useThemeContext();

  const ToggleThemeIcon = useMemo(
    () => (dark ? faMoon : faSun),
    [dark]
  );
  
  return (
    <div className="toggleTheme">
      <button type="button" onClick={toggleTheme} aria-label="Toggle Theme">
        <FontAwesomeIcon icon={ToggleThemeIcon} />
      </button>
    </div>
  );
};

export default ButtonToggleTheme;
