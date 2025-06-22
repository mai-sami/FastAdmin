import React, { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { darkTheme, lightTheme } from "../../global/theme";

const ToggleButton = () => {
  const [theme, setTheme] = useContext(themeContext);
  return (
       <div
       className="toggle-button" 
        onClick={() =>
          setTheme((prevState) =>
            prevState.theme === "light" ? darkTheme : lightTheme
          )
        }
      >
        {theme.theme === "light" ? (
          <i class="bi bi-brightness-high icons"></i>
        ) : (
          <i class="bi bi-moon-stars-fill icons"></i>
        )}
      </div>
   );
};

export default ToggleButton;
