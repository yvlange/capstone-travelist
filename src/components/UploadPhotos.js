import "../styles/UploadPhotos.css";
import { useRef } from "react";
import { BiCloudUpload } from "react-icons/bi";

function UploadPhotos({ id, name, onChange }) {
  const inputRef = useRef();

  return (
    <div className="upload" onClick={() => inputRef.current.click()}>
      <BiCloudUpload className="upload__icon" />
      <input
        type="file"
        multiple
        accept="image/*"
        className="upload__input"
        id={id}
        name={name}
        onChange={onChange}
        ref={inputRef}
        hidden
      />
      <p className="upload__label">upload photos</p>
    </div>
  );
}
export default UploadPhotos;
