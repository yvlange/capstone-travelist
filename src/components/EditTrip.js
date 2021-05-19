import "../styles/EditTrip.css";
import {
  editSingleTripFromLocalStorage,
  getSingleTripFromLocalStorage,
} from "../services/tripsStorage";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import FormInput from "./FormInput";
import UploadPhotos from "./UploadPhotos";
import { useHistory } from "react-router-dom";
import DatePicker from "react-multi-date-picker";

function EditTrip() {
  const [destinationInput, setDestinationInput] = useState("");
  const [datesInput, setDatesInput] = useState("");
  const [activitiesInput, setActivitiesInput] = useState("");
  const [locationsInput, setLocationsInput] = useState("");
  const [notesInput, setNotesInput] = useState("");
  const [imageUploads, setImageUploads] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);

  const { id } = useParams();
  const history = useHistory();

  function handleOnSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageUploads);
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
          locations: locationsInput,
          notes: notesInput,
          photos: imageURL,
        });
      });
    history.push(`/saved-trip/${destinationInput}`);
  }

  useEffect(() => {
    const myTrip = getSingleTripFromLocalStorage(id);
    setDestinationInput(myTrip.destination);
    setDatesInput(myTrip.dates);
    setActivitiesInput(myTrip.activities);
    setLocationsInput(myTrip.locations);
    setNotesInput(myTrip.notes);
    setImageUploads(myTrip.photo);
    console.log(myTrip.photo);
  }, [id]);

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
          id="locations"
          name="locations"
          value={locationsInput}
          onChange={(e) => {
            setLocationsInput(e.target.value);
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

        <UploadPhotos
          id="photos"
          name="photos"
          onChange={(e) => {
            setImageUploads(e.target.files[0]);

            const imageArray = Array.from(e.target.files).map((file) =>
              URL.createObjectURL(file)
            );
            setImgPreview([]);
            setImgPreview((prevURL) => prevURL.concat(imageArray));
          }}
        />

        {imgPreview
          ? imgPreview.map((imgPreview) => {
              return (
                <img className="imagePreview" src={imgPreview} alt="preview" />
              );
            })
          : null}

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
