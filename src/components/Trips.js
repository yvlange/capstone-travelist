import "../styles/Trips.css";
import { getTripsFromLocalStorage } from "../services/tripsStorage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// rename to trips
function Trips() {
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    const destination = getTripsFromLocalStorage("tripData");
    setDestination(destination);
  }, []);

  function renderDestination() {
    return destination.map((destination, index) => {
      return (
        <div>
          <Link to={`/saved-trip/${destination.id}`}>
            <p key={index}>{destination.destination}</p>
          </Link>
        </div>
      );
    });
  }
  return (
    <div>
      <h3>your trips.</h3> <div>{renderDestination()}</div>
    </div>
  );
}
export default Trips;
