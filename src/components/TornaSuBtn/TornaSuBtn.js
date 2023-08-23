import React, {useEffect, useState} from "react";
import "./TornaSuBtn.scss";
import {UncontrolledTooltip} from "reactstrap";
import * as BsIcon from "react-bootstrap-icons";

function TornaSuBtn() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <div className="topToBtm">
                {showTopBtn &&
                    <>
                        <div id="tornaSuTooltip" className="iconStyle" onClick={goToTop}>
                            <BsIcon.ChevronUp color={"#ffffff"} width={32} height={32} />
                        </div>
                    </>}
            </div>
        </div>
    );
}

TornaSuBtn.propTypes = {};
TornaSuBtn.defaultProps = {};

export default TornaSuBtn;
