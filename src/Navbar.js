import Logo from "./photologo.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {

    const { t } = useTranslation();

    return (  
        <nav className="navbar">
            <img src={Logo} alt="Logo" />
            <h1>{t('title')}</h1>
            <div className="links">
                <Link to="/">{t('navbar-home')}</Link>
                <Link to="/myprocess">{t('navbar-process')}</Link>
                <Link to="/gallery">{t('navbar-gallery')}</Link>
                <LanguageSwitcher />
            </div>
        </nav>
    );
}
 
export default Navbar;