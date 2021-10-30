import "./intro.scss";
import { init } from "ityped";
import { useEffect } from "react";

const Intro = ({ setMenuOpen }) => {
    // const textRef = useRef();

    useEffect(() => {
        init(document.querySelector("#el"), {
            showCursor: false,
            strings: ["Developer", "Designer", "Content Creator"],
        });
    }, []);

    return (
        <div
            className="intro"
            id="intro"
            onClick={() => {
                setMenuOpen(false);
            }}
        >
            <div className="left">
                <div className="imgContainer">
                    <img src="/assets/man2.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Hamid Reza</h1>
                    <h3>
                        Freelance <span id="el"></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="/assets/down.png" alt="" />
                </a>
            </div>
        </div>
    );
};

export default Intro;
