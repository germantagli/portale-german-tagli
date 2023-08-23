import "./Portafolio.scss";
import PropTypes from "prop-types";

/**
 * @function Portafolio test components
 * @param info information that arrives procedurally provided
 * @returns {JSX.Element}
*/
const Portafolio = ({ info }) => { 
    return (
        <ul className="testList">
            <li className="testList__item">{info}</li>
            <li className="testList__item">{info}</li>
            <li className="testList__item--colorRed">{info}</li>
        </ul>
    )
};

Portafolio.propTypes = {
    info: PropTypes.string.isRequired,
};

Portafolio.defaultProps = {
    info: "",
};

export default Portafolio;