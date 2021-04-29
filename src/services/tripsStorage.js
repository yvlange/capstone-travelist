export function getTripsFromLocalStorage() {
  const trips = JSON.parse(localStorage.getItem("tripData")) || [];

  return trips;
}

export function addTripsToLocalStorage(trip) {
  const trips = getTripsFromLocalStorage();

  trips.push(trip);

  localStorage.setItem("tripData", JSON.stringify(trips));
}
