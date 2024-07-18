import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import images from "./images";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const DetailedImage = () => {

    const { id } = useParams();

    const { t } = useTranslation();

    const img = images.find(image => image.id == id)



    return ( 
        <div className="detailed-image">
            <Link to="/gallery" className="back-btn">{t('back')}</Link>
            <h1>{img.title}</h1>
            <img src={process.env.PUBLIC_URL+ "/" + img.url} alt={img.title} />
            <div className="image-desc">
                <h3>Colour: {img.colour}</h3>
                <h3>Location: {img.location}</h3>
                <h3>Theme: {img.theme}</h3>
            </div>
            
        </div>

     );
}
 
export default DetailedImage;