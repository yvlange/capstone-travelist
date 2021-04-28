import "./FormInput.css";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

function FormInput({ name, value, onChange }) {
  const [isShown, setIsShown] = useState(true);

  function handleToggleButton(e) {
    e.preventDefault();
    setIsShown(!isShown);
  }

  const classOnClick = isShown ? "input-hidden" : "input-shown";

  return (
    <div>
      <button className="button-unfolding" onClick={handleToggleButton}>
        <FiPlus className="button-plus" />
        <label className="button-label">{name}</label>
      </button>
      <textarea
        id="input"
        className={`${classOnClick}`}
        type="text"
        placeholder={name}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default FormInput;
