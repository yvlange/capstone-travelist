import "./AddForm.css";
import FormInput from "./FormInput";
import UploadPhoto from "./UploadPhoto";
import { useState } from "react";

function AddForm() {
  const [destinationInput, setDestinationInput] = useState("");
  const [activitiesInput, setActivitiesInput] = useState("");
  const [restaurantsInput, setRestaurantsInput] = useState("");
  const [notesInput, setNotesInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(destinationInput);
    console.log(activitiesInput);
    console.log(restaurantsInput);
    console.log(notesInput);
  }

  return (
    <div className="form">
      <form className="form__textfields" onSubmit={handleSubmit}>
        <FormInput
          name="destination"
          value={destinationInput}
          onChange={(e) => {
            setDestinationInput(e.target.value);
          }}
        />
        <FormInput
          name="activities"
          value={activitiesInput}
          onChange={(e) => {
            setActivitiesInput(e.target.value);
          }}
        />
        <FormInput
          name="restaurants"
          value={restaurantsInput}
          onChange={(e) => {
            setRestaurantsInput(e.target.value);
          }}
        />
        <FormInput
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
