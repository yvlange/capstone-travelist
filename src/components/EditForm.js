import FormInput from "./FormInput";
import DatePicker from "react-multi-date-picker";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

EditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  destinationInput: PropTypes.string.isRequired,
  setDestinationInput: PropTypes.func.isRequired,
  datesInput: PropTypes.array.isRequired,
  setDatesInput: PropTypes.func.isRequired,
  activitiesInput: PropTypes.string,
  setActivitiesInput: PropTypes.func,
  locationsInput: PropTypes.string,
  setLocationsInput: PropTypes.func,
  notesInput: PropTypes.string,
  setNotesInput: PropTypes.func,
  setImageUploads: PropTypes.func,
  imgPreview: PropTypes.array,
  setImgPreview: PropTypes.func,
};

function EditForm({
  onSubmit,
  destinationInput,
  setDestinationInput,
  datesInput,
  setDatesInput,
  activitiesInput,
  setActivitiesInput,
  locationsInput,
  setLocationsInput,
  notesInput,
  setNotesInput,
}) {
  const { id } = useParams();
  const history = useHistory();
  return (
    <form className="form__textfields" onSubmit={onSubmit}>
      <DatePicker
        value={datesInput}
        onChange={(date) => setDatesInput(date)}
        format="MM/DD/YYYY"
        placeholder="select travel dates"
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

      <div className="form__buttons">
        <button
          type="button"
          className="goBackButton"
          onClick={() => history.goBack(`/single-trip/${id}`)}
        >
          back
        </button>
        <button type="submit" className="submit">
          save
        </button>
      </div>
    </form>
  );
}
export default EditForm;
