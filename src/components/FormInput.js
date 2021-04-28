import "./FormInput.css";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

function FormInput({ id, name, value, onChange }) {
  const [isShown, setIsShown] = useState(true);

  function handleToggleButton(e) {
    e.preventDefault();
    setIsShown(!isShown);
  }

  return (
    <div>
      <button className="button-unfolding" onClick={handleToggleButton}>
        <FiPlus className="button-plus" />
        <label className="button-label">{name}</label>
      </button>
      <textarea
        id={id}
        className={isShown ? "input-hidden" : "input-shown"}
        placeholder={name}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default FormInput;
