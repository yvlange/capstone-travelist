import { useEffect, useState } from "react";

function TripLink(trips) {
  const [randomImage, setRandomImage] = useState([]);

  useEffect(() => {
    const trip = getTripsFromLocalStorage("tripData");
    setTrips(trip);

    let destinations = trips.map((trip) => trip.destination);
    destinations.forEach((destination) => console.log(destination));
    console.log(destinations);

    const url = `https://api.unsplash.com/search/photos?page=1&query=${destinations}&client_id=6ybgaYshLtwpaIZkxx94OkGlOYYUO-8C6eOegB8jHFY`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const photo = data.results[0].urls.small;
        setRandomImage(photo);
      });
  }, []);

  return (
    <div>
      {randomImage.map((photo) => (
        <img src={photo.results[0].urls.small} />
      ))}
    </div>
  );
}
export default TripLink;
