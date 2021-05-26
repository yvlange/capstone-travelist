import "../styles/Modal.css";

function Modal({ onClick, onCancel }) {
  return (
    <div className="modal">
      <p className="modal__text">do you really want to remove this trip?</p>
      <div className="modal__button-wrapper">
        <button className="modal__cancel" onClick={onCancel}>
          cancel
        </button>
        <button className="modal__delete" onClick={onClick}>
          delete
        </button>
      </div>
    </div>
  );
}
export default Modal;
