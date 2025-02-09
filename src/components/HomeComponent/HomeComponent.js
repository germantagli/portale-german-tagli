import React from "react";
import About from "../../pages/About/About";
import Skills from "../../pages/Skills/Skills";
import ProgramsSkills from "../../pages/ProgramsSkills/ProgramsSkills";
import Languages from "../../pages/Languages/Languages";
import Experince from "../../pages/Experince/Experince";
import Contacts from "../../pages/Contacts/Contacts";
import Portafolio from "../../pages/Portafolio/Portafolio";

/**
 * @function HomeComponent test components
 * @returns {JSX.Element}
*/
const HomeComponent = () => {
  return (
    <div>
      <section id="about" style={{ minHeight: "300px" }}><About /></section>
      <section id="skills" style={{ minHeight: "300px" }}><Skills /></section>
      <section id="programSkills" style={{ minHeight: "300px" }}><ProgramsSkills /></section>
      <section id="languages" style={{ minHeight: "300px" }}><Languages /></section>
      <section id="experience" style={{ minHeight: "300px" }}><Experince /></section>
      <section id="portfolio"><Portafolio /></section>
      <section id="contact" style={{ minHeight: "300px" }}><Contacts /></section>
    </div>
  );
};


HomeComponent.propTypes = {};
HomeComponent.defaultProps = {};


export default HomeComponent;