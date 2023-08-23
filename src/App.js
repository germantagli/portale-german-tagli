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
          <HeaderComponent info="azasd"></HeaderComponent>
          <div>
            <section id="section-1" style={{ height: "500px", color: "black" }}>section 1</section>
            <section id="section-2" style={{ height: "500px", color: "black" }}>section 2</section>
            <section id="section-3" style={{ height: "500px", color: "black" }}>section 3</section>
            <section id="section-4" style={{ height: "500px", color: "black" }}>section 4</section>
            <section id="section-5" style={{ height: "500px", color: "black" }}>section 5</section>
          </div>
          <FooterComponent></FooterComponent>
          <TornaSuBtn></TornaSuBtn>
        </AppContextProvider>
      </I18nextProvider>
    </div>
  );
}

export default App;
