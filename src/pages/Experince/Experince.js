import { Col, Container, Row, Image } from "react-bootstrap";
import "./Experince.scss";
import PropTypes from "prop-types";
import education from "../../assests/education6.jpg"
import work from "../../assests/education7.jpg"

/**
 * @function Experince Experince components
 * @returns {JSX.Element}
*/
const Experince = () => {
    return (
        <div className="Experince">
            <Container>
                <h1 className="title">Experience</h1>
                <p className="description">From High School to Amazon. Get to know the timeline of my working experience from past to present.</p>

                <Row className="justify-content-center text-center my-5 " >
                    <Col xs="12" sm="12" md="12" lg="6" className="align-self-center">
                        <Image src={education} />
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="6" className="align-self-center education px-lg-5" >
                        <h2 className="titleEducation mt-3">Education</h2>
                        <p className="descriptionEducation">
                            <div>2016-2017</div>
                            <div>Estonian Entrepreneurship University of Applied Sciences</div>
                            <div className="mb-5">Software Development and Entrepreneurship</div>

                            <div>2016-2017</div>
                            <div>Estonian Entrepreneurship University of Applied Sciences</div>
                            <div className="mb-5">Software Development and Entrepreneurship</div>

                            <div>2016-2017</div>
                            <div>Estonian Entrepreneurship University of Applied Sciences</div>
                            <div className="mb-5">Software Development and Entrepreneurship</div>
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center text-center education" >
                    <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="align-self-center px-lg-5">
                    <h2 className="titleEducation mt-3 text-end">Work Experience</h2>
                        <p className="descriptionEducation text-end">
                            <div>2016-2017</div>
                            <div>Estonian Entrepreneurship University of Applied Sciences</div>
                            <div className="mb-5">Software Development and Entrepreneurship</div>

                            <div>2016-2017</div>
                            <div>Estonian Entrepreneurship University of Applied Sciences</div>
                            <div className="mb-5">Software Development and Entrepreneurship</div>

                            <div>2016-2017</div>
                            <div>Estonian Entrepreneurship University of Applied Sciences</div>
                            <div className="mb-5">Software Development and Entrepreneurship</div>
                        </p>
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="align-self-center">
                        <Image src={work} />
                    </Col>
                </Row>

            </Container>
        </div>
    )
};

Experince.propTypes = {};

Experince.defaultProps = {};

export default Experince;