import { Carousel, Image } from "react-bootstrap";
import "./Portafolio.scss";
import PropTypes from "prop-types";
import education from "../../assests/education6.jpg"
import work from "../../assests/education7.jpg"

/**
 * @function Portafolio test components
 * @param info information that arrives procedurally provided
 * @returns {JSX.Element}
*/
const Portafolio = ({ info }) => {
    return (
        <div className="Portafolio">
            <Carousel>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <Image src={education} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <Image src={education} />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Image src={education} />
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
};

Portafolio.propTypes = {
    info: PropTypes.string.isRequired,
};

Portafolio.defaultProps = {
    info: "",
};

export default Portafolio;