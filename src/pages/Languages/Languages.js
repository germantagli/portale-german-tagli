import { Col, Container, Row, Image} from "react-bootstrap";
import "./Languages.scss";
import PropTypes from "prop-types";
import Spanish from "../../assests/espana.png"
import Italian from "../../assests/italia.png"
import English from "../../assests/inglaterra.png"
import { useTranslation } from "react-i18next";

/**
 * @function Languages
 * @returns {JSX.Element}
*/
const Languages = () => {
    const [tranlastion] = useTranslation("global")
    return (
        <div className="Languages">
            <Container>
                <div className="title text center">{tranlastion("Languages.title")}</div>
                <Row className="justify-content-center text-center">
                    <Col xs="12" sm="12" md="4">
                        <p className="lingua">{tranlastion("Languages.spanish")}</p>
                        <Image src={Spanish} thumbnail   width={100} height={100}/>
                        <p className="description">{tranlastion("Languages.native")}</p>
                    </Col>
                    <Col xs="12" sm="12" md="4">
                        <p className="lingua">{tranlastion("Languages.italian")}</p>
                        <Image src={Italian} thumbnail width={100} height={100}/>
                        <p className="description">{tranlastion("Languages.fluent")}</p>
                    </Col>
                    <Col xs="12" sm="12" md="4">
                        <p className="lingua">{tranlastion("Languages.english")}</p>
                        <Image src={English} thumbnail  width={100} height={100}/>
                        <p className="description">{tranlastion("Languages.intermediate")}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

Languages.propTypes = {};

Languages.defaultProps = {};

export default Languages;