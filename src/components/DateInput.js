import "../styles/DateInput.css";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

function DateInput({ type, id, name, text, value, onChange }) {
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
      <div className={isShown ? "input-hidden" : "dateInput"}>
        <label className="dateInput__label">{text}</label>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
export default DateInput;
