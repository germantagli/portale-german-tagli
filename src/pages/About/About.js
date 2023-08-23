import "./About.scss";
import PropTypes from "prop-types";

/**
 * @function About test components
 * @param info information that arrives procedurally provided
 * @returns {JSX.Element}
*/
const About = ({ info }) => { 
    return (
        <ul className="testList">
            <li className="testList__item">{info}</li>
            <li className="testList__item">{info}</li>
            <li className="testList__item--colorRed">{info}</li>
        </ul>
    )
};

About.propTypes = {
    info: PropTypes.string.isRequired,
};

About.defaultProps = {
    info: "",
};

export default About;