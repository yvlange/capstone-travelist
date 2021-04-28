import "./FormInput.css";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

function FormInput({ name }) {
  const [isShown, setIsShown] = useState(true);
  //   const [input, setInput] = useState("");

  function handleToggleButton(e) {
    e.preventDefault();
    setIsShown(!isShown);
    console.log(isShown);
  }

  const classOnClick = isShown ? "input-hidden" : "input-shown";

  return (
    <div>
      <button className="button-unfolding" onClick={handleToggleButton}>
        <FiPlus className="button-plus" />
        <span className="button-label">{name}</span>
      </button>

      <textarea
        id="input"
        className={`${classOnClick}`}
        type="text"
        placeholder={name}
      ></textarea>
    </div>
  );
}

export default FormInput;
