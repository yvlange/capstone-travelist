export function addTripsToLocalStorage(trip) {
  const trips = getTripsFromLocalStorage();

  trips.push(trip);

  localStorage.setItem("tripData", JSON.stringify(trips));
}

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

export function editSingleTripFromLocalStorage(id, updatedTrip) {
  const myTrips = getTripsFromLocalStorage();

  const updatedTrips = myTrips.map((trip) => {
    if (trip.id === id) {
      return { ...trip, ...updatedTrip };
    } else {
      return trip;
    }
  });

  localStorage.setItem("tripData", JSON.stringify(updatedTrips));
}
