import "../styles/UploadPhoto.css";
// import { BsUpload } from "react-icons/bs";

function UploadPhoto({ id, name, onChange }) {
  return (
    <div className="upload">
      {/* <label for="file" className="upload__label"> */}
      {/* <BsUpload className="upload__icon" />
        Choose a Photo */}
      <input
        type="file"
        accept="image/*"
        multiple
        className="upload__input"
        id={id}
        name={name}
        onChange={onChange}
      />
      {/* </label> */}
    </div>
  );
}
export default UploadPhoto;
