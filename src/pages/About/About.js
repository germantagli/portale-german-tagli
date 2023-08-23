import { useTranslation } from "react-i18next";
import "./About.scss";
import { Row, Col, Container, Image} from 'react-bootstrap';
import german from '../../assests/german2.jpg'

/**
 * @function About
 * @returns {JSX.Element}
*/
const About = () => {
    const [tranlastion, i18n] = useTranslation("global")
    return (
        <div className="About">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col xs="12" sm="4" md="4" className="mx-5">
                        <h1 className="title">{tranlastion("about.title")}</h1>
                        <p>{tranlastion("about.infoOne")}</p>
                        <p>{tranlastion("about.infoTwo")}</p>
                    </Col>
                    <Col xs="12" sm="4" md="4" className="mx-5">
                       <p className="based">{tranlastion("about.basedSeattle")} </p>
                       <div className="year mb-4">{Number(new Date().getFullYear()) - 1991} {tranlastion("about.yearsOld")} </div>
                       <Image src={german} roundedCircle width={295} height={295}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

About.propTypes = {};

About.defaultProps = {};

export default About;