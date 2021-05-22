import "../styles/EditTrip.css";
import {
  editSingleTripFromLocalStorage,
  getSingleTripFromLocalStorage,
} from "../services/tripsStorage";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import UploadPhotos from "./UploadPhotos";
import { useHistory } from "react-router-dom";

import Form from "./Form";

function EditTrip() {
  const [destinationInput, setDestinationInput] = useState("");
  const [datesInput, setDatesInput] = useState("");
  const [activitiesInput, setActivitiesInput] = useState("");
  const [locationsInput, setLocationsInput] = useState("");
  const [notesInput, setNotesInput] = useState("");
  // const [imageUploads, setImageUploads] = useState([]);
  // const [imgPreview, setImgPreview] = useState([]);

  const { id } = useParams();
  const history = useHistory();

  function handleOnSubmit(e) {
    e.preventDefault();
    // const fileListAsArray = Array.from(imageUploads);
    // const imagesPromises = fileListAsArray.map((imageUpload) => {
    //   const formData = new FormData();

    //   formData.append("file", imageUpload);
    //   formData.append("upload_preset", "tyikvr8a");

    //   return fetch("https://api.cloudinary.com/v1_1/dyjecx1wm/image/upload", {
    //     method: "PUT",
    //     body: formData,
    //   }).then((response) => response.json());
    // });

    // Promise.all(imagesPromises).then((imagesResults) => {
    //   const imageURLs = imagesResults.map(
    //     (imageResult) => imageResult.secure_url
    //   );
    editSingleTripFromLocalStorage(id, {
      destination: destinationInput,
      dates: datesInput,
      activities: activitiesInput,
      locations: locationsInput,
      notes: notesInput,
      // photos: imageURLs,
    });
    // });
    history.push(`/saved-trip/${id}`);
  }

  useEffect(() => {
    const myTrip = getSingleTripFromLocalStorage(id);
    setDestinationInput(myTrip.destination);
    setDatesInput(myTrip.dates);
    setActivitiesInput(myTrip.activities);
    setLocationsInput(myTrip.locations);
    setNotesInput(myTrip.notes);
    // setImageUploads(myTrip.photo);
  }, [id]);

  return (
    <div>
      <h3>edit your trip.</h3>
      <Form
        onSubmit={handleOnSubmit}
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
      />
      {/* <UploadPhotos
          id="photos"
          name="photos"
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
          : null} */}
    </div>
  );
}
export default EditTrip;
