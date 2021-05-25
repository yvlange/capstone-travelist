import "../styles/AddTrip.css";
import { useState } from "react";
import { addTripsToLocalStorage } from "../services/tripsStorage";
import { useHistory, Link } from "react-router-dom";
import Form from "./Form";

function AddTrip() {
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

    if (destinationInput === "") {
      alert("Please enter a destination");
    } else {
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
            id: `${destinationInput.slice(1)}${destinationInput.slice(2)}`
              .split(" ")
              .join("-"),
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
          alert("Error status: ", error.toString());
        });
    }
  }

  return (
    <div className="form">
      <Form
        onSubmit={handleSubmit}
        destinationInput={destinationInput}
        setDestinationInput={setDestinationInput}
        datesInput={datesInput}
        setDatesInput={setDatesInput}
        activitiesInput={activitiesInput}
        setActivitiesInput={setActivitiesInput}
        locationsInput={locationsInput}
        setLocationsInput={setLocationsInput}
        notesInput={notesInput}
        setNotesInput={setNotesInput}
        imgPreview={imgPreview}
        setImgPreview={setImgPreview}
        setImageUploads={setImageUploads}
      />
      <Link to="/destinationShuffle">
        <p className="needInspo">need some inspiration?</p>
      </Link>
    </div>
  );
}

export default AddTrip;
