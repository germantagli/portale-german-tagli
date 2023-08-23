import "./NavBarComponent.scss";
import Scrollspy from 'react-scrollspy'
import { Nav, Navbar, NavDropdown, Button, Image } from 'react-bootstrap';
import { useContext, useEffect, useState } from "react";
import inglaterra from "../../assests/inglaterra.png"
import espana from "../../assests/espana.png"
import italia from "../../assests/italia.png"
import { AppContext } from "../../contexts/appContext";
import LENGUAGE from "../../utils/constants";

/**
 * @function NavBarComponent
 * @returns {JSX.Element}
*/
const NavBarComponent = ({ info }) => {
    const [showBackground, setShowBackground] = useState(false);
    const { lenguage, setLenguage} = useContext( AppContext );

    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(window.scrollY);
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
            <Scrollspy items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5']} currentClassName="is-current" style={{ backgroundColor: showBackground ? "#1c1c1d" : "transparent" }}>
                <Navbar expand="lg" className="" onToggle={(value) => openMenu(value)}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav p-0" className="custom-toggler" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="mx-3">
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <Button onClick={() => setLenguage(LENGUAGE.ENGLISH)} variant="" className={`${lenguage === LENGUAGE.ENGLISH ? "active" : ''}  mx-1`}><Image src={inglaterra} height={20} width={25} /></Button>
                                <Button onClick={() => setLenguage(LENGUAGE.SPANISH)} variant="" className={ `${lenguage === LENGUAGE.SPANISH ? "active" : ''}`}><Image src={espana} height={20} width={25} /></Button>
                                <Button onClick={() => setLenguage(LENGUAGE.ITALY)} variant="" className={`${lenguage === LENGUAGE.ITALY ? "active" : ''}  mx-1`}><Image src={italia} height={20} width={25} /></Button>
                            </NavDropdown>
                            <Nav.Link href="#section-1">About</Nav.Link>
                            <Nav.Link href="#section-2">Skills</Nav.Link>
                            <Nav.Link href="#section-3">Experience</Nav.Link>
                            <Nav.Link href="#section-4">Portfolio</Nav.Link>
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