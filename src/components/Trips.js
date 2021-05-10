import "../styles/Trips.css";
import { getTripsFromLocalStorage } from "../services/tripsStorage";
import { useEffect, useState } from "react";
import NoTripsPlaceholder from "./NoTripsPlaceholder";
// import TripLink from "./TripLink";
import { Link } from "react-router-dom";

function Trips() {
  const [trips, setTrips] = useState([]);
  // const [randomImage, setRandomImage] = useState([]);

  useEffect(() => {
    const trip = getTripsFromLocalStorage("tripData");
    setTrips(trip);

    // let destinations = trips.map((trip) => trip.destination);
    // destinations.forEach((destination) => console.log(destination));
    // console.log(destinations);

    // const url = `https://source.unsplash.com/random/900×700/?${trips.destination}`;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const photo = data.results[0].urls.small;
    //     setRandomImage(photo);
    // });
  }, []);

  function renderTrips() {
    return trips.map((trips, index) => {
      return (
        <div className="randomImages">
          <Link to={`/saved-trip/${trips.id}`}>
            {/* <TripLink value={trips.destination} /> */}

            <img
              src={`https://source.unsplash.com/random/125x180/?${trips.destination}`}
              alt="destination"
            />
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
