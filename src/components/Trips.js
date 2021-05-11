import "../styles/Trips.css";
import {
  getTripsFromLocalStorage,
  removeTripFromLocalStorage,
} from "../services/tripsStorage";
import { useEffect, useState } from "react";
import NoTripsPlaceholder from "./NoTripsPlaceholder";
import { Link } from "react-router-dom";

import TripCard from "./TripCard";

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
        <Link to={`/saved-trip/${trips.id}`}>
          <TripCard
            src={`https://source.unsplash.com/random/?${trips.destination}`}
            key={index}
            text={trips.destination}
            onClick={handleRemoveTrip}
          />
        </Link>
      );
    });
  }
  return (
    <div className="container">
      <h3>your trips.</h3>
      <div className="randomImages__container">
        {trips.length < 1 && <NoTripsPlaceholder />}
        {renderTrips()}
      </div>
    </div>
  );
}
export default Trips;
