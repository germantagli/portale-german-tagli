import "./TestComponent.scss";
import PropTypes from "prop-types";

/**
 * @function TestComponent test components
 * @param info information that arrives procedurally provided
 * @returns {JSX.Element}
*/
const TestComponent = ({ info }) => { 
    return (
        <ul className="testList">
            <li className="testList__item">{info}</li>
            <li className="testList__item">{info}</li>
            <li className="testList__item--colorRed">{info}</li>
        </ul>
    )
};

TestComponent.propTypes = {
    info: PropTypes.string.isRequired,
};

TestComponent.defaultProps = {
    info: "",
};

export default TestComponent;