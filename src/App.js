import React, { Suspense, useState } from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// components
import { lightTheme } from "./global/theme";
import { GlobalStyle } from "./global/style";
import { router as routes } from "./router";

// contexts
import { themeContext } from "./context/themeContext";
import { useTranslation } from "react-i18next";
import { Spinner } from "react-bootstrap";

const App = () => {
  const router = useRoutes(routes);
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider value={[theme, setTheme]}>
        <div className="App">
          <GlobalStyle dir={i18n.language === "en" ? "ltr" : "rtl"} />
          <Suspense
            fallback={
              <div className="spinner">
                <Spinner />
              </div>
            }
          >
            {router}
          </Suspense>
        </div>
      </themeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
