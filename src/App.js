import React, { Suspense, useEffect, useState } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// components
import { lightTheme } from "./global/theme";
import { GlobalStyle } from "./global/style";
import { router as routes } from "./router";

// contexts
import { themeContext } from "./context/themeContext";
import { useTranslation } from "react-i18next";
import { Spinner } from "react-bootstrap";
import { useGetData } from "./hooks/useGetData";
import { config } from "./config/headerConfig";

const App = () => {
  const { getAdminInfluencer } = useGetData();
  useEffect(() => {
    getAdminInfluencer(config);
  }, []);

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
              <div className="Spinner_admin appShow">
                <Spinner animation="border" variant="warning" />
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
