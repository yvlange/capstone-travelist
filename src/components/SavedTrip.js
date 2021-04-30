import "../styles/SavedTrip.css";
import { BsChevronDown } from "react-icons/bs";
import { getTripsFromLocalStorage } from "../services/tripsStorage";
import { useEffect, useState } from "react";

function SavedTrip() {
  const [tripData, setTripData] = useState([]);

  useEffect(() => {
    const trip = getTripsFromLocalStorage("tripData");
    setTripData(trip);
    console.log(trip);
  }, []);

  function renderTrip() {
    return tripData.map((trip, index) => {
      return (
        <div className="savedTrip" key={index}>
          <div className="savedTrip__category-box">
            <label className="savedTrip__destination">
              destination.
              <span>
                <BsChevronDown className="savedTrip__icon-down" />
              </span>
            </label>
          </div>
          <p className="savedTrip__textInput">{trip.destination}</p>
          <div className="savedTrip__category-box">
            <label className="savedTrip__destination">
              activities.
              <span>
                <BsChevronDown className="savedTrip__icon-down" />
              </span>
            </label>
          </div>
          <p className="savedTrip__textInput">{trip.activities}</p>
        </div>
      );
    });
  }
  return <div>{renderTrip()}</div>;
}

export default SavedTrip;
