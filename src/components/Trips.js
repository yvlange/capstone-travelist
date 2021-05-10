import "../styles/Trips.css";
import {
  getTripsFromLocalStorage,
  removeTripFromLocalStorage,
} from "../services/tripsStorage";
import { useEffect, useState } from "react";
import NoTripsPlaceholder from "./NoTripsPlaceholder";
import { Link } from "react-router-dom";
import { RiDeleteBin2Line } from "react-icons/ri";

function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const trip = getTripsFromLocalStorage("tripData");
    setTrips(trip);
  }, []);

  function handleRemoveTrip(trip) {
    removeTripFromLocalStorage(trip);
    const newTrips = getTripsFromLocalStorage();
    setTrips(newTrips);
  }

  function renderTrips() {
    return trips.map((trips, index) => {
      return (
        <div className="randomImages">
          <Link to={`/saved-trip/${trips.id}`}>
            <img
              src={`https://source.unsplash.com/random/125x180/?${trips.destination}`}
              alt="destination"
              className="randomImages__image"
            />
            <div className="randomImages__info">
              <p className="randomImages__destination" key={index}>
                {trips.destination}
              </p>
              <span
                className="randomImages__delete"
                onClick={() => handleRemoveTrip(trips.id)}
              >
                <RiDeleteBin2Line />
              </span>
            </div>
          </Link>
        </div>
      );
    });
  }
  return (
    <div className="container">
      <h3>your trips.</h3>
      <div>
        {trips.length < 1 && <NoTripsPlaceholder />}
        {renderTrips()}
      </div>
    </div>
  );
}
export default Trips;
