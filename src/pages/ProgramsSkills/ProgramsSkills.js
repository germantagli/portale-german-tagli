import "./ProgramsSkills.scss";
import PropTypes from "prop-types";

/**
 * @function ProgramsSkills test components
 * @param info information that arrives procedurally provided
 * @returns {JSX.Element}
*/
const ProgramsSkills = ({ info }) => { 
    return (
        <ul className="testList">
            <li className="testList__item">{info}</li>
            <li className="testList__item">{info}</li>
            <li className="testList__item--colorRed">{info}</li>
        </ul>
    )
};

ProgramsSkills.propTypes = {
    info: PropTypes.string.isRequired,
};

ProgramsSkills.defaultProps = {
    info: "",
};

export default ProgramsSkills;