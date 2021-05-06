import "../styles/UploadPhoto.css";
// import { BsUpload } from "react-icons/bs";

function UploadPhoto({ id, name, value, onChange }) {
  return (
    <div className="upload">
      {/* <label for="file" className="upload__label">
        <BsUpload className="upload__icon" />
        Choose a Photo
      </label> */}
      <input
        type="file"
        mulitple
        className="upload__input"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default UploadPhoto;
