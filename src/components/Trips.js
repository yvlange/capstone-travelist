import "../styles/Trips.css";
import {
  getTripsFromLocalStorage,
  removeTripFromLocalStorage,
} from "../services/tripsStorage";
import { useEffect, useState } from "react";
import NoTripsPlaceholder from "./NoTripsPlaceholder";
import TripCard from "./TripCard";

function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const trip = getTripsFromLocalStorage("tripData");
    setTrips(trip);
  }, []);

  function handleRemoveTrip(trip) {
    const confirm = window.confirm("Do you really want to remove the trip?");
    if (confirm) {
      removeTripFromLocalStorage(trip);
      const newTrips = getTripsFromLocalStorage();
      setTrips(newTrips);
    }
  }

  function renderTrips() {
    return trips.map((trips, index) => {
      return (
        <div key={index}>
          <TripCard
            path={`/single-trip/${trips.id}`}
            src={`https://source.unsplash.com/random/?${trips.destination}`}
            alt={trips.destination}
            text={trips.destination}
            onClick={() => handleRemoveTrip(trips.id)}
          />
        </div>
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
