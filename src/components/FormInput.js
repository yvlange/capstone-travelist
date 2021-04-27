import { useState } from "react";
import "./FormInput.css";
import { FiPlus } from "react-icons/fi";

function FormInput({ name }) {
  const [isShown, setIsShown] = useState(false);

  function handleToggleButton(e) {
    e.preventDefault();
    setIsShown(true);
  }

  return (
    <div>
      <button className="button-unfolding" onClick={handleToggleButton}>
        <FiPlus />
        <span className="button-label">{name}</span>
      </button>
      {isShown === true && (
        <input
          id="destination"
          className="destination"
          type="text"
          placeholder="enter destination"
        />
      )}
    </div>
  );
}

export default FormInput;
