import "../styles/Trips.css";
import { getTripsFromLocalStorage } from "../services/tripsStorage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to={`/saved-trips/${trips.id}`}>
            <p key={index}>{trips.destination}</p>
          </Link>
        </div>
      );
    });
  }
  return (
    <div>
      <h3>your trips.</h3> <div>{renderTrips()}</div>
    </div>
  );
}
export default Trips;
