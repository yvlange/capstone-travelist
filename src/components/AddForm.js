import "./AddForm.css";
import FormInput from "./FormInput";

function AddForm() {
  return (
    <div className="form">
      <form className="form__textfields">
        <FormInput name="destination" />
        <FormInput name="activities" />
        <FormInput name="restaurants" />
        <FormInput name="notes" />
        <div className="form__buttons">
          <button className="submit">save</button>
          <button className="cancel">cancel</button>
        </div>
      </form>
    </div>
  );
}
export default AddForm;
