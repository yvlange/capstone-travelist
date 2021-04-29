import { BsChevronDown } from "react-icons/bs";
import { getTripsFromLocalStorage } from "../services/tripsStorage";
import { useEffect, useState } from "react";

function SingleTrip() {
  const [tripData, setTripData] = useState([]);
  useEffect(() => {
    const trip = getTripsFromLocalStorage("tripData");
    setTripData(trip);
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
        </div>
      );
    });
  }
  return <div>{renderTrip()}</div>;
}

export default SingleTrip;
