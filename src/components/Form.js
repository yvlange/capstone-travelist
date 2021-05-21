import FormInput from "./FormInput";
import UploadPhotos from "./UploadPhotos";
import DatePicker from "react-multi-date-picker";

function Form({
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
  setImageUploads,
  imgPreview,
  setImgPreview,
}) {
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
  );
}
export default Form;
