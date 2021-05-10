import "../styles/AddForm.css";
import FormInput from "./FormInput";
import UploadPhoto from "./UploadPhoto";
import { useState } from "react";
import { addTripsToLocalStorage } from "../services/tripsStorage";

function AddForm() {
  const [destinationInput, setDestinationInput] = useState("");
  const [activitiesInput, setActivitiesInput] = useState("");
  const [restaurantsInput, setRestaurantsInput] = useState("");
  const [notesInput, setNotesInput] = useState("");
  const [imageUpload, setImageUpload] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageUpload);
    formData.append("upload_preset", "tyikvr8a");

    fetch("https://api.cloudinary.com/v1_1/dyjecx1wm/image/upload", {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const imageURL = data.secure_url;
        addTripsToLocalStorage({
          id: destinationInput,
          destination: destinationInput,
          activities: activitiesInput,
          restaurants: restaurantsInput,
          notes: notesInput,
          photo: imageURL,
        });

        setDestinationInput("");
        setActivitiesInput("");
        setRestaurantsInput("");
        setNotesInput("");
        setImageUpload("");
      });
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
        <UploadPhoto
          id="photo"
          name="photo"
          onChange={(e) => {
            setImageUpload(e.target.files[0]);
          }}
        />
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
