import Logo from "./photologo.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <img src={Logo} alt="Logo" />
            <h1>Superb Film Frames</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/myprocess">Getting Started</Link>
                <Link to="/gallery">Gallery</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;