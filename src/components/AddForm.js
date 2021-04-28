import "./AddForm.css";
import FormInput from "./FormInput";
import UploadPhoto from "./UploadPhoto";
import { useState } from "react";
import {
  addTripsToLocalStorage,
  getTripsFromLocalStorage,
} from "../services/tripsStorage";

function AddForm() {
  const [destinationInput, setDestinationInput] = useState("");
  const [activitiesInput, setActivitiesInput] = useState("");
  const [restaurantsInput, setRestaurantsInput] = useState("");
  const [notesInput, setNotesInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTripsToLocalStorage({
      destination: destinationInput,
      activities: activitiesInput,
      restaurants: restaurantsInput,
      notes: notesInput,
    });
    const trips = getTripsFromLocalStorage();
    console.log(trips);
    setDestinationInput("");
    setActivitiesInput("");
    setRestaurantsInput("");
    setNotesInput("");
  }

  return (
    <div className="form">
      <form className="form__textfields" onSubmit={handleSubmit}>
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
        <UploadPhoto />
        <div className="form__buttons">
          <button type="submit" className="submit">
            save
          </button>
          <button className="cancel">cancel</button>
        </div>
      </form>
    </div>
  );
}
export default AddForm;
