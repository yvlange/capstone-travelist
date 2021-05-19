import "../styles/AddForm.css";
import FormInput from "./FormInput";
import UploadPhotos from "./UploadPhotos";
import { useState } from "react";
import { addTripsToLocalStorage } from "../services/tripsStorage";
import DatePicker from "react-multi-date-picker";
import { useHistory, Link } from "react-router-dom";

function AddForm() {
  const [destinationInput, setDestinationInput] = useState("");
  const [datesInput, setDatesInput] = useState("");
  const [activitiesInput, setActivitiesInput] = useState("");
  const [locationsInput, setLocationsInput] = useState("");
  const [notesInput, setNotesInput] = useState("");
  const [imageUploads, setImageUploads] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const fileListAsArray = Array.from(imageUploads);
    const imagesPromises = fileListAsArray.map((imageUpload) => {
      const formData = new FormData();

      formData.append("file", imageUpload);
      formData.append("upload_preset", "tyikvr8a");

      return fetch("https://api.cloudinary.com/v1_1/dyjecx1wm/image/upload", {
        method: "PUT",
        body: formData,
      }).then((response) => response.json());
    });

    Promise.all(imagesPromises)
      .then((imagesResults) => {
        const imageURLs = imagesResults.map(
          (imageResult) => imageResult.secure_url
        );

        addTripsToLocalStorage({
          id: destinationInput.split(" ").join("-"),
          destination: destinationInput,
          dates: datesInput,
          activities: activitiesInput,
          locations: locationsInput,
          notes: notesInput,
          photos: imageURLs,
        });
        history.push("/trips");
      })
      .catch((error) => {
        console.log("Error status: ", error.toString());
      });
  }

  return (
    <div className="form">
      <form className="form__textfields" onSubmit={handleSubmit}>
        <DatePicker
          value={datesInput}
          onChange={(date) => setDatesInput(date)}
          format="MM/DD/YYYY"
          range
          inputClass="custom-input"
          required
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
          id="photo"
          name="photo"
          onChange={(e) => {
            setImageUploads(e.target.files);

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

        <div className="form__buttons">
          <button type="submit" className="submit">
            save
          </button>
          <button className="cancel">cancel</button>
        </div>
      </form>
      <Link to="/destinationShuffle">
        <p className="needInspo">need some inspiration?</p>
      </Link>
    </div>
  );
}

export default AddForm;
