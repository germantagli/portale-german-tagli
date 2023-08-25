import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contacts.scss";
import PropTypes from "prop-types";

/**
 * @function Contacts test components
 * @param info information that arrives procedurally provided
 * @returns {JSX.Element}
*/
const Contacts = ({ info }) => {
    return (
        <div className="Contacts">
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="6">
                        <h1 className="title">Contact me</h1>
                        <p className="description">Please contact me via this form and I will reply back within 24 hours.</p>
                        <a cla href="tel:Or call me at +1-2738-3840-234">
                            <p className="description">Or call me at +1-2738-3840-234</p>
                        </a>
                        <a href="mailto:contact@henrymcdcv.com" >
                            <p className="description">
                                contact@henrymcdcv.com
                            </p>
                        </a>

                        <div className="socialCard">
                            <p className="m-0 p-0 findMe">Find me on:</p>

                            <div className="wrapSocial">
                                <div className="link-wrapper">
                                    <a aria-label="Social link" class="link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
                                        <div class="Contact6styled__SocialIcon-sc-1cg5agc-20 tXjNA styled__SvgIcon-sc-1mehu68-0 ihVyiR" data-name="icon-facebook">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                <path d="M12.026 6.81v4.13H9v5.051h3.026V31h6.216V15.992h4.171s.391-2.422.58-5.07h-4.728V7.469c0-.516.678-1.21 1.348-1.21H23V1.001h-4.605c-6.523 0-6.369 5.055-6.369 5.81z"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>

                                <div className="link-wrapper">
                                    <a aria-label="Social link" class=" link" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
                                        <div class="Contact6styled__SocialIcon-sc-1cg5agc-20 tXjNA styled__SvgIcon-sc-1mehu68-0 ihVyiR" data-name="icon-twitter">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                <path d="M31 6.883a12.292 12.292 0 01-3.534.969 6.178 6.178 0 002.705-3.402 12.386 12.386 0 01-3.911 1.494A6.137 6.137 0 0021.768 4a6.154 6.154 0 00-5.995 7.555 17.473 17.473 0 01-12.684-6.43 6.103 6.103 0 00-.832 3.093 6.153 6.153 0 002.737 5.122 6.162 6.162 0 01-2.788-.772v.077a6.161 6.161 0 004.936 6.035 6.225 6.225 0 01-1.622.216c-.397 0-.782-.039-1.159-.114a6.159 6.159 0 005.748 4.274 12.346 12.346 0 01-7.643 2.63c-.497 0-.986-.03-1.468-.084a17.398 17.398 0 009.433 2.769c11.321 0 17.509-9.377 17.509-17.509l-.021-.797a12.291 12.291 0 003.078-3.179z">
                                                </path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>

                                <div className="link-wrapper">
                                    <a aria-label="Social link" class=" link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com">
                                        <div class="Contact6styled__SocialIcon-sc-1cg5agc-20 tXjNA styled__SvgIcon-sc-1mehu68-0 ihVyiR" data-name="icon-linkedin">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                <path d="M29.333 18.777v9.83h-5.716v-9.172c0-2.304-.827-3.876-2.896-3.876-1.579 0-2.519 1.06-2.933 2.085-.151.366-.19.877-.19 1.389v9.574h-5.717s.077-15.534 0-17.144h5.717v2.43l-.038.055h.038v-.055c.76-1.166 2.116-2.833 5.152-2.833 3.762 0 6.582 2.45 6.582 7.716zM5.902 3.2c-1.956 0-3.235 1.279-3.235 2.961 0 1.646 1.242 2.964 3.159 2.964h.038c1.994 0 3.234-1.318 3.234-2.964C9.06 4.479 7.858 3.2 5.902 3.2zM3.006 28.608h5.715V11.464H3.006v17.144z">
                                                </path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>

                                <div className="link-wrapper">
                                    <a aria-label="Social link" class=" link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com">
                                        <div class="Contact6styled__SocialIcon-sc-1cg5agc-20 tXjNA styled__SvgIcon-sc-1mehu68-0 ihVyiR" data-name="icon-instagram">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                <path d="M16 8.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 12.188A4.695 4.695 0 0111.312 16c0-2.586 2.104-4.688 4.688-4.688s4.688 2.102 4.688 4.688A4.695 4.695 0 0116 20.688zm8.063-11.751a.999.999 0 110-1.997.999.999 0 010 1.997zM21.625 1h-11.25A9.376 9.376 0 001 10.375v11.25A9.376 9.376 0 0010.375 31h11.25A9.376 9.376 0 0031 21.625v-11.25A9.376 9.376 0 0021.625 1zm6.563 20.625a6.57 6.57 0 01-6.563 6.563h-11.25a6.57 6.57 0 01-6.563-6.563v-11.25a6.57 6.57 0 016.563-6.563h11.25a6.57 6.57 0 016.563 6.563v11.25z">
                                                </path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="6" className="mt-5" >
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Control type="email" placeholder="Email address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Type your message here" />
                            </Form.Group>
                        </Form>
                        <div className="text-end">
                            <Button variant="primary" className="text-end">Send</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

Contacts.propTypes = {
    info: PropTypes.string.isRequired,
};

Contacts.defaultProps = {
    info: "",
};

export default Contacts;