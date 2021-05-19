import "../styles/UploadPhotos.css";

function UploadPhotos({ id, name, onChange }) {
  return (
    <div className="upload">
      <input
        type="file"
        multiple
        accept="image/*"
        className="upload__input"
        id={id}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
export default UploadPhotos;
