import "./FormInput.css";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

function FormInput({ name }) {
  const [isShown, setIsShown] = useState(false);

  function handleToggleButton(e) {
    e.preventDefault();
    setIsShown(!isShown);
  }

  return (
    <div>
      <button className="button-unfolding" onClick={handleToggleButton}>
        <FiPlus className="button-plus" />
        <span className="button-label">{name}</span>
      </button>
      {isShown === true && (
        <input id="input" className="input" type="text" placeholder={name} />
      )}
    </div>
  );
}

export default FormInput;
