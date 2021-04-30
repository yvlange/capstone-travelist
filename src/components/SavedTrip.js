import "../styles/SavedTrip.css";
import { BsChevronDown } from "react-icons/bs";
import { getSingleTripFromLocalStorage } from "../services/tripsStorage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SavedTrip() {
  const [singleTrip, setSingleTrip] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const myTrip = getSingleTripFromLocalStorage(id);
    setSingleTrip(myTrip);
  }, [id]);

  return (
    <div className="savedTrip" key={id}>
      <div className="savedTrip__category-box">
        <label className="savedTrip__destination">
          destination.
          <span>
            <BsChevronDown className="savedTrip__icon-down" />
          </span>
        </label>
      </div>
      <p className="savedTrip__textInput">{singleTrip.destination}</p>
      <div className="savedTrip__category-box">
        <label className="savedTrip__destination">
          activities.
          <span>
            <BsChevronDown className="savedTrip__icon-down" />
          </span>
        </label>
      </div>
      <p className="savedTrip__textInput">{singleTrip.activities}</p>
    </div>
  );
}

export default SavedTrip;
