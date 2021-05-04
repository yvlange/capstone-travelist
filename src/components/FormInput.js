import "../styles/FormInput.css";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

function FormInput({ id, name, value, onChange }) {
  const [isShown, setIsShown] = useState(true);

  function handleToggleButton(e) {
    e.preventDefault();
    setIsShown(!isShown);
  }

  const autoExpand = function (textField) {
    // Reset field height
    textField.style.height = "inherit";

    // Get the computed styles for the element
    const computed = getComputedStyle(textField);

    // Calculate the height
    const height =
      parseInt(computed.getPropertyValue("border-top-width")) +
      parseInt(computed.getPropertyValue("padding-top")) / 2 +
      textField.scrollHeight +
      parseInt(computed.getPropertyValue("padding-bottom")) / 2 +
      parseInt(computed.getPropertyValue("border-bottom-width"));

    textField.style.height = height + "px";
  };

  function handleInput(event) {
    autoExpand(event.target);
  }

  return (
    <div>
      <button className="button-unfolding" onClick={handleToggleButton}>
        <FiPlus className="button-plus" />
        <label className="button-label">{name}</label>
      </button>
      <textarea
        id={id}
        className={isShown ? "input-hidden" : null}
        placeholder={name}
        value={value}
        onChange={onChange}
        onInput={handleInput}
      ></textarea>
    </div>
  );
}

export default FormInput;
