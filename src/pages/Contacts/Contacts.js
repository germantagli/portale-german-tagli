import "./Contacts.scss";
import PropTypes from "prop-types";

/**
 * @function Contacts test components
 * @param info information that arrives procedurally provided
 * @returns {JSX.Element}
*/
const Contacts = ({ info }) => { 
    return (
        <ul className="testList">
            <li className="testList__item">{info}</li>
            <li className="testList__item">{info}</li>
            <li className="testList__item--colorRed">{info}</li>
        </ul>
    )
};

Contacts.propTypes = {
    info: PropTypes.string.isRequired,
};

Contacts.defaultProps = {
    info: "",
};

export default Contacts;