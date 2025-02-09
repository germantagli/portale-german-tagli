import { Col, Container, Row, Image } from "react-bootstrap";
import "./Experince.scss";
import PropTypes from "prop-types";
import degreeCertificate from "../../assests/tituloDegree.jpg"
import work from "../../assests/education6.jpg"
import education from "../../assests/education7.jpg"
import { useTranslation } from "react-i18next";
import * as BsIcon from "react-bootstrap-icons";
import { useState } from "react";
import ModalComponent from "../../components/ModalComponent/ModalComponent";

/**
 * @function Experince Experince components
 * @returns {JSX.Element}
*/
const Experince = () => {
    const [tranlastion] = useTranslation("global")
    const [opeModalTecnico, setOpenModalTecnico] = useState(false);
    const [opeModalDegree, setOpenModalDegree] = useState(false);
    return (
        <div className="Experince">
            <Container>
                <h1 className="title">{tranlastion("experience.title")}</h1>
                <p className="description">{tranlastion("experience.description")}</p>

                <Row className="justify-content-center text-center my-5 " >
                    <Col xs="12" sm="12" md="12" lg="6" className="align-self-center">
                        <Image src={education} />
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="6" className="align-self-center education px-lg-5" >
                        <h2 className="titleEducation mt-3">{tranlastion("experience.education")}</h2>
                        <p className="descriptionEducation">
                            <div>2003-2009</div>
                            <div>
                                <a target="_blank" href="https://es.wikipedia.org/wiki/Universidad_de_Oriente_(Venezuela)">
                                    {tranlastion("experience.laSalle")}
                                </a>
                            </div>
                            <div className="mb-3 mb-lg-5">
                                <span className="certificate">{tranlastion("experience.certificate")}</span>
                                {/* <BsIcon.InfoCircle onClick={() => setOpenModalTecnico(true)} color={"#6ddb9a"} width={24} height={24} /> */}
                            </div>

                            {/* ---- */}

                            <div>2009-2016</div>
                            <div>
                                <a target="_blank" href="https://es.wikipedia.org/wiki/Universidad_de_Oriente_(Venezuela)">
                                    {tranlastion("experience.udo")}
                                </a>
                            </div>
                            <div className="mb-3 mb-lg-5">
                                <span className="certificate"> {tranlastion("experience.degreeCertificate")}</span>
                                <BsIcon.InfoCircle onClick={() => setOpenModalDegree(true)} color={"#6ddb9a"} width={24} height={24} />
                            </div>

                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center text-center education" >
                    <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="align-self-center px-lg-5">
                        <h2 className="titleEducation mt-3 text-end">{tranlastion("experience.workExperience")}</h2>
                        <p className="descriptionEducation text-end">

                            {/* <div>2022-{new Date().getFullYear()}</div>
                            <div>
                                <a target="_blank" href="https://www.linkedin.com/company/ags-it/">
                                    {tranlastion("experience.ags")}
                                </a>
                            </div>
                            <div className="mb-3 mb-lg-5">{tranlastion("experience.seniorDeveloper")}</div> */}

                            <div>2019-{new Date().getFullYear()}</div>
                            <div>
                                <a target="_blank" href="https://www.linkedin.com/company/dstexperienceagency/">
                                    {tranlastion("experience.dst")}
                                </a>
                            </div>
                            <div className="mb-3 mb-lg-5">{tranlastion("experience.middleDeveloper")}</div>

                            <div>2018-2019</div>
                            <div>
                                <a target="_blank" href="https://www.linkedin.com/company/lutech/">
                                    {tranlastion("experience.lutech")}
                                </a>
                            </div>
                            <div className="mb-3 mb-lg-5">{tranlastion("experience.juniorDeveloper")}</div>

                            <div>2017-2018</div>
                            <div>
                                <a target="_blank" href="https://www.linkedin.com/company/fabaris/">
                                    {tranlastion("experience.fabaris")}
                                </a>
                            </div>
                            <div className="mb-3 mb-lg-5">{tranlastion("experience.juniorDeveloper")}</div>
                        </p>
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="align-self-center">
                        <Image src={work} />
                    </Col>
                </Row>
            </Container>
            <ModalComponent
                title={tranlastion("experience.certificate")}
                content={degreeCertificate}
                show={opeModalTecnico}
                onHide={() => setOpenModalTecnico(false)}>
            </ModalComponent>

            <ModalComponent
                title={tranlastion("experience.degreeCertificate")}
                content={degreeCertificate}
                show={opeModalDegree}
                onHide={() => setOpenModalDegree(false)}>
            </ModalComponent>
        </div>
    )
};

Experince.propTypes = {};

Experince.defaultProps = {};

export default Experince;