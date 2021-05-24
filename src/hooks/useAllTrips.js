import { useEffect, useState } from "react";
import { getTripsFromLocalStorage } from "../services/tripsStorage";

function useAllTrips() {
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    const trip = getTripsFromLocalStorage("tripData");
    setTrip(trip);
  }, []);
  return [trip, setTrip];
}
export default useAllTrips;
