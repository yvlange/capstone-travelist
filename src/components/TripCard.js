import "../styles/TripCard.css";
import { RiDeleteBin2Line } from "react-icons/ri";

function TripCard({ index, text, onClick, src }) {
  return (
    <div className="randomImages">
      <img src={src} alt="destination" className="randomImages__image" />
      <div className="randomImages__info">
        <p className="randomImages__destination" key={index}>
          {text}
        </p>
        <div onClick={onClick}>
          <RiDeleteBin2Line className="randomImages__delete" />
        </div>
      </div>
    </div>
  );
}
export default TripCard;
