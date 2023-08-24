import "./Skills.scss";
import PropTypes from "prop-types";
import { Row, Col, Container, Image } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

/**
 * @function Skills test components
 * @returns {JSX.Element}
*/


const SKILLS_LIST = (tranlastion) => [
    {
        "title": tranlastion("skills.skills"),
        "description": tranlastion("skills.descriptionSkills"),
        "href": "#programSkills",
        "linkDescription":  tranlastion("skills.linkMore"),
        "icon": <svg xmlns="http://www.w3.org/2000/svg" width="9" height="32" viewBox="0 0 9 32"><path d="M3.078 27.693h2.458v1.231H3.078v-1.231zM4.846.833a.651.651 0 00-.053-.542l.002.003a.621.621 0 00-.856-.201l.003-.002C2.306 1.117 0 4.612 0 8.309c0 1.443 1.006 2.936 2.53 3.617.148.069.33.138.518.195l.031.008c.368.11.791.173 1.229.173s.861-.063 1.261-.181l-.032.008.284-.091c1.676-.63 2.794-2.204 2.794-3.728 0-4.551-4.886-3.972-3.769-7.477zM3.078 12.861v14.121h2.458V12.861a5.067 5.067 0 01-2.493-.008l.035.008zM3.078 30.771a1.229 1.229 0 102.458 0v-1.138H3.078z"></path>
        </svg>
    },
    {
        "title":  tranlastion("skills.experince"), 
        "description": tranlastion("skills.descriptionExperience"),
        "href": "#experience",
        "linkDescription": tranlastion("skills.linkMore"),
        "icon": <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M30.944 11.743h-9.945L16.996 1.737a1.063 1.063 0 00-1.981 0l-4.003 9.996H1.056A1.06 1.06 0 000 12.81c0 .356.183.681.467.874l8.879 5.923-3.952 9.864a1.067 1.067 0 001.585 1.29L16 24.757l9.021 6.004a1.075 1.075 0 001.483-.295c.193-.295.234-.67.102-.996l-3.952-9.864 8.879-5.923c.488-.325.62-.996.295-1.483a1.098 1.098 0 00-.884-.457z"></path></svg>
    },
    {
        "title": tranlastion("skills.portfolio"),
        "description": tranlastion("skills.descriptionPortfolio"),
        "href": "#portfolio",
        "linkDescription": tranlastion("skills.linkMore"),
        "icon": <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M17.768 19.474h.112c1.113 0 2.211-.067 3.289-.196l-.13.013v-4.46H10.982v4.47c.954.11 2.06.173 3.181.173h.08v-.549c0-.634.514-1.148 1.148-1.148h1.219c.634 0 1.148.514 1.148 1.148v.549z"></path><path d="M9.763 19.139v-4.226a1.3 1.3 0 011.3-1.3h9.895a1.3 1.3 0 011.3 1.3v4.216c5.679-.996 8.736-3.505 9.742-4.632V7.681c0-.976-.791-1.768-1.768-1.768h-8.604V4.714a.59.59 0 00.589-.589.6.6 0 00-.402-.557l-.004-.001c-1.696-.586-3.651-.925-5.684-.925l-.133.001h.007-.126c-2.034 0-3.988.339-5.81.962l.126-.038a.59.59 0 00.183 1.148v1.199H1.77c-.976 0-1.768.791-1.768 1.768v7.182c0 .102.01.213.02.315 1.107.691 4.643 3.281 9.742 3.962zm1.798-14.75a16.865 16.865 0 014.358-.559h.086-.004.081c1.549 0 3.05.204 4.479.586l-.121-.027v1.524h-8.879z"></path><path d="M17.768 20.693h-.01v.681c0 .634-.514 1.148-1.148 1.148h-1.219a1.148 1.148 0 01-1.148-1.148v-.681h-.01c-3.291 0-6.288-.467-8.919-1.402-1.737-.61-3.332-1.432-4.124-2.001v10.25c0 .976.791 1.768 1.768 1.768h26.088c.976 0 1.768-.791 1.768-1.768V17.249c-1.757 1.25-6.085 3.444-13.044 3.444z"></path><path d="M15.482 19.017h1.046v2.268h-1.046v-2.268z"></path></svg>
    }
]
const Skills = () => {
    const [tranlastion] = useTranslation("global")
    return (
        <div className="Skills">
            <Container>
                <Row className="justify-content-center text-center">
                    {SKILLS_LIST(tranlastion).map(item => {
                        const { title, description, href, linkDescription, icon } = item
                        return (
                            <Col xs="12" sm="12" md="4">
                                <div class="cardSkills">
                                    <div class="circle">
                                        <div color="#FFFFFF" data-name="icon-match-complexity-3">{icon}</div>
                                    </div>
                                    <h1 class="title">{title}</h1>
                                    <p class="description">{description}</p>
                                    <div class="link-wrapper ">
                                        <a class="link" href={href}>
                                            {linkDescription}
                                            <div data-name="keyboard_arrow_right">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path d="M11.438 21.813l6.125-6.125-6.125-6.125 1.875-1.875 8 8-8 8z"></path></svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>

    )


};

Skills.propTypes = {};

Skills.defaultProps = {};

export default Skills;