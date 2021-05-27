import "../styles/Trips.css";
import {
  getTripsFromLocalStorage,
  removeTripFromLocalStorage,
} from "../services/tripsStorage";
import NoTripsPlaceholder from "./NoTripsPlaceholder";
import TripCard from "./TripCard";
import useAllTrips from "../hooks/useAllTrips";
import { useHistory } from "react-router-dom";

function Trips() {
  const [trips, setTrips] = useAllTrips();
  const history = useHistory();

  function handleRemoveTrip(trip) {
    removeTripFromLocalStorage(trip);
    const newTrips = getTripsFromLocalStorage();
    setTrips(newTrips);
    history.push("/trips");
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
