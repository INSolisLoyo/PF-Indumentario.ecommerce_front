import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const DetailGallery = ({ images }) => {

      return (
        <div className=" w-full h-3/4 lg:w-3/5">
         <ImageGallery 

            items={images}
            className="w-56 h-96"
            showPlayButton={false}  
            showNav={true}//muestra las flechas de navegación
            thumbnailPosition='bottom'//posición de la barra
            autoPlay={false}
            slideOnThumbnailOver={true}
          />
        </div>
      )
}

export default DetailGallery;

