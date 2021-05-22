import "../styles/TripCard.css";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

TripCard.protoTypes = {
  index: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string,
  path: PropTypes.string,
};

function TripCard({ index, text, onClick, src, alt, path }) {
  return (
    <div className="randomImages">
      <Link to={path}>
        <img src={src} alt={alt} className="randomImages__image" />
        <div className="randomImages__info">
          <p className="randomImages__destination" key={index}>
            {text}
          </p>
        </div>
      </Link>
      <RiDeleteBin2Line className="randomImages__delete" onClick={onClick} />
    </div>
  );
}
export default TripCard;
