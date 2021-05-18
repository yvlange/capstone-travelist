import "../styles/UploadPhoto.css";

function UploadPhoto({ id, name, onChange }) {
  return (
    <div className="upload">
      <input
        type="file"
        accept="image/*"
        className="upload__input"
        id={id}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
export default UploadPhoto;
