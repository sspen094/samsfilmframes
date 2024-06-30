import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import images from "./images";

const DetailedImage = () => {

    const { id } = useParams();

    const img = images.find(image => image.id == id)



    return ( 
        <div className="detailed-image">
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