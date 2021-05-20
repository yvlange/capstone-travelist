import { useHistory } from "react-router-dom";
import "../styles/GoBackButton.css";

function GoBackButton() {
  const history = useHistory();

  return (
    <button className="goBackButton" onClick={() => history.goBack()}>
      back
    </button>
  );
}
export default GoBackButton;
