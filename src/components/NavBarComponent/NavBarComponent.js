import "./NavBarComponent.scss";
import Scrollspy from 'react-scrollspy'
import { Nav, Navbar, NavDropdown, Button, Image } from 'react-bootstrap';
import { useContext, useEffect, useState } from "react";
import inglaterra from "../../assests/inglaterra.png"
import espana from "../../assests/espana.png"
import italia from "../../assests/italia.png"
import { AppContext } from "../../contexts/appContext";
import LANGUAGE from "../../utils/constants";
import { useTranslation } from "react-i18next"

/**
 * @function NavBarComponent
 * @returns {JSX.Element}
*/
const NavBarComponent = ({ info }) => {
    const [showBackground, setShowBackground] = useState(false);
    const { lenguage, setLenguage} = useContext( AppContext );
    const [tranlastion, i18n] = useTranslation("global")
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY === 0) {
                setShowBackground(false);
            } else {
                setShowBackground(true);
            }
        });
    }, []);

    const openMenu = (value) => {
        if (window.scrollY === 0) setShowBackground(value);
    }

    return (
        <div className="navBarComponent">
            <Scrollspy items={['about', 'skills', 'experience', 'portfolio', 'contact', 'programSkills']} currentClassName="is-current" style={{ backgroundColor: showBackground ? "#1c1c1d" : "transparent" }}>
                <Navbar expand="lg" className="" onToggle={(value) => openMenu(value)}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav p-0" className="custom-toggler" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="mx-3">
                            <NavDropdown title={tranlastion("header.language")} id="navbarScrollingDropdown">
                                <Button onClick={() => i18n.changeLanguage(LANGUAGE.ENGLISH)} variant="" className={`${i18n.language === LANGUAGE.ENGLISH ? "active" : ''}  mx-1`}><Image src={inglaterra} height={20} width={25} /></Button>
                                <Button onClick={() => i18n.changeLanguage(LANGUAGE.SPANISH)} variant="" className={ `${i18n.language === LANGUAGE.SPANISH ? "active" : ''}`}><Image src={espana} height={20} width={25} /></Button>
                                <Button onClick={() => i18n.changeLanguage(LANGUAGE.ITALY)} variant="" className={`${i18n.language === LANGUAGE.ITALY ? "active" : ''}  mx-1`}><Image src={italia} height={20} width={25} /></Button>
                            </NavDropdown>
                            <Nav.Link href="#about">{tranlastion("header.about")}</Nav.Link>
                            <Nav.Link href="#skills">{tranlastion("header.skills")}</Nav.Link>
                            <Nav.Link href="#experience">{tranlastion("header.experience")}</Nav.Link>
                            {/* <Nav.Link href="#portfolio">{tranlastion("header.portfolio")}</Nav.Link> */}
                            <Nav.Link href="#contact">{tranlastion("header.contact")}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Scrollspy>
        </div>
    )
};

NavBarComponent.propTypes = {};

NavBarComponent.defaultProps = {};

export default NavBarComponent;