import "../styles/Trips.css";
import { getTripsFromLocalStorage } from "../services/tripsStorage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoTripsPlaceholder from "./NoTripsPlaceholder";

function Trips() {
  const [trips, setTrips] = useState([]);
  const [randomImage, setRandomImage] = useState();

  useEffect(() => {
    const trip = getTripsFromLocalStorage("tripData");
    setTrips(trip);
    const destination = trip[0].destination;
    console.log(destination);

    const url = `https://api.unsplash.com/search/photos?page=1&query=${destination}&client_id=6ybgaYshLtwpaIZkxx94OkGlOYYUO-8C6eOegB8jHFY`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const photo = data.results[0].urls.small;
        setRandomImage(photo);
        console.log(photo);
      });
  }, [trips.destination]);
  console.log(trips.destination);

  function renderTrips() {
    return trips.map((trips, index) => {
      return (
        <div>
          <img src={randomImage} alt="destination" />

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
