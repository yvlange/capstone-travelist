import "../styles/EditTrip.css";
import {
  editSingleTripFromLocalStorage,
  getSingleTripFromLocalStorage,
} from "../services/tripsStorage";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Carousel from "./Carousel";
import { useHistory } from "react-router-dom";
import EditForm from "./EditForm";

function EditTrip() {
  const [destinationInput, setDestinationInput] = useState("");
  const [datesInput, setDatesInput] = useState([]);
  const [activitiesInput, setActivitiesInput] = useState("");
  const [locationsInput, setLocationsInput] = useState("");
  const [notesInput, setNotesInput] = useState("");
  const [imgPreview, setImgPreview] = useState([]);

  const { id } = useParams();
  const history = useHistory();

  function handleOnSubmit(e) {
    e.preventDefault();

    editSingleTripFromLocalStorage(id, {
      destination: destinationInput,
      dates: datesInput,
      activities: activitiesInput,
      locations: locationsInput,
      notes: notesInput,
    });

    history.push(`/single-trip/${id}`);
  }

  useEffect(() => {
    const myTrip = getSingleTripFromLocalStorage(id);
    setDestinationInput(myTrip.destination);
    setDatesInput(myTrip.dates);
    setActivitiesInput(myTrip.activities);
    setLocationsInput(myTrip.locations);
    setNotesInput(myTrip.notes);
    setImgPreview(myTrip.photos);
  }, [id]);

  return (
    <div>
      <h3>edit your trip.</h3>
      <EditForm
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
      <Carousel name="photos" images={imgPreview} />
    </div>
  );
}
export default EditTrip;
