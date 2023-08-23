import "./HeaderComponent.scss";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import SocialComponent from "../SocialComponent/SocialComponent";

/**
 * @function HeaderComponent test components
 * @returns {JSX.Element}
*/
const HeaderComponent = () => {
    return (
        <div className="HeaderComponent">
            <div className="container">
                <NavBarComponent></NavBarComponent>
                <div className="nome">
                    <h1 className="nome1">German Tagliaferri</h1>
                    <h2 className="nome2">Front-End Developer</h2>
                </div>
            </div>
            <SocialComponent></SocialComponent>
        </div>
    )
};

HeaderComponent.propTypes = {};

HeaderComponent.defaultProps = {};

export default HeaderComponent;