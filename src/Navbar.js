import Logo from "./photologo.png"

const Navbar = () => {
    return (  
        <nav className="navbar">
            <img src={Logo} alt="Logo" />
            <h1>Sam's Film Frames</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/gallery">Gallery</a>
            </div>
        </nav>
    );
}
 
export default Navbar;