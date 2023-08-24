import { toHaveDescription } from "@testing-library/jest-dom/matchers";
import "./ProgramsSkills.scss";
import PropTypes from "prop-types";
import { Row, Col, Container, Image } from 'react-bootstrap';
import angular from "../../assests/angular.png"
import react from "../../assests/react.png"
import html from "../../assests/html.png"
import sass from "../../assests/sass.png"
import vue from "../../assests/vue2.svg"
import ionic from "../../assests/ionic.png"
import { useTranslation } from "react-i18next";

/**
 * @function ProgramsSkills ProgramsSkills components
 * @returns {JSX.Element}
*/
const SKILLS = [
    {
        name: "HTML",
        description: "Html4/Html5",
        imagen: html,
    },
    {
        name: "CSS3",
        description: "SASS/LESS",
        imagen: sass,
    },
    {
        name: "JS",
        description: "Angular",
        imagen: angular
    },
    {
        name: "JS",
        description: "React",
        imagen: react
    },
    {
        name: "JS",
        description: "Vue",
        imagen: vue
    },
    {
        name: "JS",
        description: "Ionic",
        imagen: ionic
    }
]
const ProgramsSkills = () => {
    const [tranlastion] = useTranslation("global")
    return (
        <div className="ProgramsSkills">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col xs="12" sm="12" md="8" className="align-self-center">
                        <h1 className="title">{tranlastion("programsSkills.title")}</h1>
                        <p className="description">{tranlastion("programsSkills.description")} </p>
                    </Col>
                    <Col xs="12" sm="12" md="4" >
                        <Row className="justify-content-center text-center">
                            {
                                SKILLS.map(item => {
                                    const {name, description, imagen} = item;
                                    return (
                                        <Col xs="4" sm="4" md="6">
                                            <div className="titleSkill">{name}</div>
                                            <Image src={imagen} roundedCircle width={70} height={70} />
                                            <p className="descriptionSkill">{description}</p>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
};

ProgramsSkills.propTypes = {};

ProgramsSkills.defaultProps = {};

export default ProgramsSkills;