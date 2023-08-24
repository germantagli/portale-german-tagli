import { Container, Row, Nav, Navbar, Col } from "react-bootstrap";
import "./FooterComponent.scss";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

/**
 * @function FooterComponent Footer components
 * @returns {JSX.Element}
*/
const FooterComponent = ({ info }) => {
    const [tranlastion] = useTranslation("global")
    return (
        <div className="FooterComponent">
            <div className="justify-content-center text-center wrapLinks">
                <a href="#about">{tranlastion("header.about")}</a>
                <a href="#skills">{tranlastion("header.skills")}</a>
                <a href="#experience">{tranlastion("header.experience")}</a>
                <a href="#portfolio">{tranlastion("header.portfolio")}</a>
                <a href="#contact">{tranlastion("header.contact")}</a>
            </div>

        </div>
    )
};

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;