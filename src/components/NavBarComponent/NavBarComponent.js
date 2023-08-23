import "./NavBarComponent.scss";
import Scrollspy from 'react-scrollspy'
import { Nav, Navbar } from 'react-bootstrap';
import { useEffect, useState } from "react";

/**
 * @function NavBarComponent
 * @returns {JSX.Element}
*/
const NavBarComponent = ({ info }) => {
    const [showBackground, setShowBackground] = useState(false);
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

    return (
        <div className="navBarComponent">
            <Scrollspy items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5']} currentClassName="is-current" style={{backgroundColor:showBackground ? "#1c1c1d" : "transparent"}}>
                <Navbar expand="lg" className="" >
                    <Navbar.Toggle aria-controls="basic-navbar-nav p-0" className="custom-toggler"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#section-1">About</Nav.Link>
                            <Nav.Link href="#section-2">Skills</Nav.Link>
                            <Nav.Link href="#section-3">Experience</Nav.Link>
                            <Nav.Link href="#section-4">Portfolio</Nav.Link>
                            <Nav.Link href="#section-5">Contact</Nav.Link>
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