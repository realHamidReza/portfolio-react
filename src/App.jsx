import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import "./app.scss";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro setMenuOpen={setMenuOpen} />
                <Portfolio setMenuOpen={setMenuOpen} />
                <Works setMenuOpen={setMenuOpen} />
                <Testimonials setMenuOpen={setMenuOpen} />
                <Contact setMenuOpen={setMenuOpen} />
            </div>
        </div>
    );
}

export default App;
