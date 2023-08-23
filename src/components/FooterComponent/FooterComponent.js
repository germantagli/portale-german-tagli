import "./FooterComponent.scss";
import PropTypes from "prop-types";

/**
 * @function FooterComponent test components
 * @param info information that arrives procedurally provided
 * @returns {JSX.Element}
*/
const FooterComponent = ({ info }) => { 
    return (
       <div>Footer</div> 
    )
};

FooterComponent.propTypes = {
    info: PropTypes.string.isRequired,
};

FooterComponent.defaultProps = {
    info: "",
};

export default FooterComponent;