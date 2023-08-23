import "./styles/index.scss";
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import TornaSuBtn from "./components/TornaSuBtn/TornaSuBtn";
import AppContextProvider from "./contexts/appContext";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
