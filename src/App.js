import "./styles/index.scss";
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import TornaSuBtn from "./components/TornaSuBtn/TornaSuBtn";
import AppContextProvider from "./contexts/appContext";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import global_it from "./translations/it/global.json"
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Experince from "./pages/Experince/Experince";
import Portafolio from "./pages/Portafolio/Portafolio";
import Contacts from "./pages/Contacts/Contacts";


i18next.init({
  interpolation: { scape: false },
  lng: "en",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
    it: {
      global: global_it
    },
  }
})

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18next}>
        <AppContextProvider>
          <HeaderComponent></HeaderComponent>
          <div>
            <section id="about" style={{ minHeight: "300px" }}><About></About></section>
            <section id="skills" style={{ minHeight: "500px"}}><Skills></Skills></section>
            <section id="experience" style={{ minHeight: "500px"}}><Experince></Experince></section>
            <section id="portfolio" style={{ minHeight: "500px" }}><Portafolio></Portafolio></section>
            <section id="contact" style={{ minHeight: "500px" }}><Contacts></Contacts></section>
          </div>
          <FooterComponent></FooterComponent>
          <TornaSuBtn></TornaSuBtn>
        </AppContextProvider>
      </I18nextProvider>
    </div>
  );
}

export default App;
