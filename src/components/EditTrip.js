import "../styles/EditTrip.css";
import {
  editSingleTripFromLocalStorage,
  getSingleTripFromLocalStorage,
} from "../services/tripsStorage";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import FormInput from "./FormInput";
import UploadPhoto from "./UploadPhoto";
import { useHistory } from "react-router-dom";
import DatePicker from "react-multi-date-picker";

function EditTrip() {
  const [destinationInput, setDestinationInput] = useState("");
  const [datesInput, setDatesInput] = useState("");
  const [activitiesInput, setActivitiesInput] = useState("");
  const [restaurantsInput, setRestaurantsInput] = useState("");
  const [notesInput, setNotesInput] = useState("");
  const [imageUpload, setImageUpload] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);

  const { id } = useParams();
  const history = useHistory();

  function handleOnSubmit(e) {
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

        editSingleTripFromLocalStorage(id, {
          destination: destinationInput,
          dates: datesInput,
          activities: activitiesInput,
          restaurants: restaurantsInput,
          notes: notesInput,
          photo: imageURL,
        });
      });
    history.push(`/saved-trip/${destinationInput}`);
  }

  useEffect(() => {
    const myTrip = getSingleTripFromLocalStorage(id);
    setDestinationInput(myTrip.destination);
    setDatesInput(myTrip.dates);
    setActivitiesInput(myTrip.activities);
    setRestaurantsInput(myTrip.restaurants);
    setNotesInput(myTrip.notes);
    setImageUpload(myTrip.photo);
  }, [id]);

  console.log(imageUpload);

  return (
    <div>
      <h3>edit your trip.</h3>
      <form className="editForm" onSubmit={handleOnSubmit}>
        <DatePicker
          value={datesInput}
          onChange={(date) => setDatesInput(date)}
          format="MM/DD/YYYY"
          range
          inputClass="custom-input"
        />
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

            const file = e.target.files[0];
            const prevURL = URL.createObjectURL(file);

            setImgPreview(prevURL);
          }}
        />

        {imageUpload ? (
          <img className="imagePreview" src={imgPreview} alt="preview" />
        ) : null}

        <div className="saveButtonBox">
          <button type="submit" className="saveButton">
            save
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditTrip;
