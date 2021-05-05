import "../styles/Trips.css";
import { getTripsFromLocalStorage } from "../services/tripsStorage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoTripsPlaceholder from "./NoTripsPlaceholder";

function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const trip = getTripsFromLocalStorage("tripData");
    setTrips(trip);
  }, []);

  function renderTrips() {
    return trips.map((trips, index) => {
      return (
        <div>
          <Link to={`/saved-trip/${trips.id}`}>
            <p key={index}>{trips.destination}</p>
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
