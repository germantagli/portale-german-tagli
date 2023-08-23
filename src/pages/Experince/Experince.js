import "./Experince.scss";
import PropTypes from "prop-types";

/**
 * @function Experince test components
 * @param info information that arrives procedurally provided
 * @returns {JSX.Element}
*/
const Experince = ({ info }) => { 
    return (
        <ul className="testList">
            <li className="testList__item">{info}</li>
            <li className="testList__item">{info}</li>
            <li className="testList__item--colorRed">{info}</li>
        </ul>
    )
};

Experince.propTypes = {
    info: PropTypes.string.isRequired,
};

Experince.defaultProps = {
    info: "",
};

export default Experince;