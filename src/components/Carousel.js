import "../styles/Carousel.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import { Image } from "cloudinary-react";

function Carousel({ images }) {
  const [photo, setPhoto] = useState(0);
  const length = images?.length;

  function nextSlide() {
    setPhoto(photo === length - 1 ? 0 : photo + 1);
  }

  function prevSlide() {
    setPhoto(photo === 0 ? length - 1 : photo - 1);
  }

  if (!Array.isArray(images) || length <= 0) {
    return null;
  }
  return (
    <div className="carousel">
      <BiChevronLeft className="left-arrow" onClick={prevSlide} />
      <BiChevronRight className="right-arrow" onClick={nextSlide} />
      {images.map((image, index) => {
        return (
          <div
            className={index === photo ? "slideActive" : "slide"}
            key={index}
          >
            {index === photo && (
              <Image
                className="uploadedImage image"
                cloudName="dyjecx1wm"
                publicId={image}
                secure="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
export default Carousel;
