import { Modal, Button, Image} from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

/**
 * @function ModalComponent ModalComponent components
 * @returns {JSX.Element}
*/
const ModalComponent = (props) => {
    console.log("zdfdfadf", props);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
            <Image src={props.content} />
            </Modal.Body>
        </Modal>
    )
};

ModalComponent.propTypes = {};

ModalComponent.defaultProps = {};

export default ModalComponent;