import "./TestComponent.scss";
import PropTypes from "prop-types";

/**
 * @function Skills test components
 * @param info information that arrives procedurally provided
 * @returns {JSX.Element}
*/
const Skills = ({ info }) => { 
    return (
        <ul className="testList">
            <li className="testList__item">{info}</li>
            <li className="testList__item">{info}</li>
            <li className="testList__item--colorRed">{info}</li>
        </ul>
    )
};

Skills.propTypes = {
    info: PropTypes.string.isRequired,
};

Skills.defaultProps = {
    info: "",
};

export default Skills;