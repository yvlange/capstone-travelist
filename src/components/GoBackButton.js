import { useHistory } from "react-router-dom";
import "../styles/GoBackButton.css";

function GoBackButton({ text }) {
  const history = useHistory();

  function handleClickBack() {
    history.goBack();
  }
  return (
    <button className="goBackButton" onClick={handleClickBack}>
      back
    </button>
  );
}
export default GoBackButton;
