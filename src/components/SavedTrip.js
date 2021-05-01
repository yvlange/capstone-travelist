import "../styles/SavedTrip.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { getSingleTripFromLocalStorage } from "../services/tripsStorage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SavedTrip() {
  const [isShown, setIsShown] = useState(true);
  const [singleTrip, setSingleTrip] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const myTrip = getSingleTripFromLocalStorage(id);
    setSingleTrip(myTrip);
  }, [id]);

  function handleUnfold(e) {
    e.preventDefault();
    setIsShown(!isShown);
  }
  return (
    <div className="savedTrip" key={id}>
      <h3>
        your trip to <p>{singleTrip.destination}</p>
      </h3>
      <div className="savedTrip__category-box">
        <label className="savedTrip__headline">activities.</label>
        <span onClick={handleUnfold}>
          {isShown ? <BsChevronDown /> : <BsChevronUp />}
        </span>
      </div>
      <article
        className={
          isShown ? "savedTrip__textInput-hidden" : "savedTrip__textInput"
        }
      >
        {singleTrip.activities}
      </article>
      <div className="savedTrip__category-box">
        <label className="savedTrip__headline">restaurants.</label>
        <span onClick={handleUnfold}>
          {isShown ? <BsChevronDown /> : <BsChevronUp />}
        </span>
      </div>
      <article
        className={
          isShown ? "savedTrip__textInput-hidden" : "savedTrip__textInput"
        }
      >
        {singleTrip.restaurants}
      </article>
      <div className="savedTrip__category-box">
        <label className="savedTrip__headline">notes.</label>
        <span onClick={handleUnfold}>
          {isShown ? <BsChevronDown /> : <BsChevronUp />}
        </span>
      </div>
      <article
        className={
          isShown ? "savedTrip__textInput-hidden" : "savedTrip__textInput"
        }
      >
        {singleTrip.notes}
      </article>
    </div>
  );
}

export default SavedTrip;
