export function getTripsFromLocalStorage() {
  const trips = JSON.parse(localStorage.getItem("tripData")) || [];

  return trips;
}

export function getSingleTripFromLocalStorage(tripId) {
  const trips = getTripsFromLocalStorage();

  const singleTrip = trips.find((trip) => {
    return trip.id === tripId;
  });
  localStorage.setItem("tripData", JSON.stringify(singleTrip));
}

export function addTripsToLocalStorage(trip) {
  const trips = getTripsFromLocalStorage();

  trips.push(trip);

  localStorage.setItem("tripData", JSON.stringify(trips));
}
