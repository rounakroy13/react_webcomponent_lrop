import { MyApp } from "./MyApp";
//import { ListReport } from "./ListReport";
import { HashRouter } from "react-router-dom";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import { setLanguage } from "@ui5/webcomponents-base/dist/config/Language";
import { useEffect, useState } from "react";
function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const theme = urlParams.get("sap-ui-theme") || "sap_horizon"; // http://localhost:5174/?sap-ui-theme=sap_horizon_dark#/home --- sap_fiori_3, sap_horizon_dark, sap_horizon

  const lang = urlParams.get("sap-language") || "en";
  const [language, setLang] = useState(lang);
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      const response = await fetch(`/i18n/${language}.json`);
      const data = await response.json();
      setTranslations(data);
    };
    loadTranslations();
    setLanguage(language);
  }, [language]);

  setLanguage(lang);
  setTheme(theme);
  return (
    <HashRouter>
      <MyApp />
    </HashRouter>
  );
}

export default App;
