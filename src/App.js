import "./styles/index.scss";
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import TornaSuBtn from "./components/TornaSuBtn/TornaSuBtn";
import AppContextProvider from "./contexts/appContext";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import global_it from "./translations/it/global.json";
import About from "./pages/About/About";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import RenewableDashboard from "./pages/RenewableDashboard/RenewableDashboard";

i18next.init({
  interpolation: { escape: false },
  lng: "en",
  resources: {
    es: { global: global_es },
    en: { global: global_en },
    it: { global: global_it },
  }
});

function App() {
  return (
    <Router>
      <I18nextProvider i18n={i18next}>
        <AppContextProvider>
          <Routes>
            {/* Rutas con Header y Footer */}
            <Route path="/" element={
              <>
                <HeaderComponent />
                <HomeComponent />
                <FooterComponent />
                <TornaSuBtn />
              </>
            } />
            
            {/* Ruta sin Header ni Footer */}
            <Route path="/demo-renewable-dashboard" element={<RenewableDashboard />} />
          </Routes>
        </AppContextProvider>
      </I18nextProvider>
    </Router>
  );
}


export default App;
