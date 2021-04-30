import "../styles/UploadPhoto.css";
import { BsUpload } from "react-icons/bs";

function UploadPhoto() {
  return (
    <div className="upload">
      <BsUpload className="upload__icon" />
      <p>Upload Photos</p>
    </div>
  );
}
export default UploadPhoto;
