import "../styles/EditTrip.css";
import {
  editSingleTripFromLocalStorage,
  getTripsFromLocalStorage,
} from "../services/tripsStorage";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import FormInput from "./FormInput";

function EditTrip() {
  const [destinationInput, setDestinationInput] = useState("");
  const [activitiesInput, setActivitiesInput] = useState("");
  const [restaurantsInput, setRestaurantsInput] = useState("");
  const [notesInput, setNotesInput] = useState("");
  const { id } = useParams();

  function handleOnSubmit(e) {
    e.preventDefault();
    editSingleTripFromLocalStorage(id, {
      destination: destinationInput,
      activities: activitiesInput,
      restaurants: restaurantsInput,
      notes: notesInput,
    });
  }

  useEffect(() => {
    const myTrip = getTripsFromLocalStorage(id);
    setDestinationInput(myTrip.destination);
    setActivitiesInput(myTrip.activities);
    setRestaurantsInput(myTrip.restaurants);
    setNotesInput(myTrip.notes);
  }, [id]);

  return (
    <div className="editForm">
      <h3>edit your trip.</h3>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          id="destination"
          name="destination"
          value={destinationInput}
          onChange={(e) => {
            setDestinationInput(e.target.value);
          }}
        />
        <FormInput
          id="activities"
          name="activities"
          value={activitiesInput}
          onChange={(e) => {
            setActivitiesInput(e.target.value);
          }}
        />
        <FormInput
          id="restaurants"
          name="restaurants"
          value={restaurantsInput}
          onChange={(e) => {
            setRestaurantsInput(e.target.value);
          }}
        />
        <FormInput
          id="notes"
          name="notes"
          value={notesInput}
          onChange={(e) => {
            setNotesInput(e.target.value);
          }}
        />
        <button type="submit" className="saveButton">
          Save
        </button>
      </form>
    </div>
  );
}
export default EditTrip;
