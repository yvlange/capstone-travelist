export function getTripsFromLocalStorage() {
  const trips = JSON.parse(localStorage.getItem("tripData")) || [];

  return trips;
}

export function getSingleTripFromLocalStorage(id) {
  const myTrips = getTripsFromLocalStorage();
  const singleTrip = myTrips.find((trip) => {
    return trip.id === id;
  });
  return singleTrip;
}

// export function getSingleTripFromLocalStorage(id) {
//   const trips = getTripsFromLocalStorage();

//   const singleTrip = trips.find((trip) => {
//     return trip.id === id;
//   });
//   return singleTrip;
// }

export function addTripsToLocalStorage(trip) {
  const trips = getTripsFromLocalStorage();

  trips.push(trip);

  localStorage.setItem("tripData", JSON.stringify(trips));
}
