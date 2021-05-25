import "../styles/TripDetails.css";
import PropTypes from "prop-types";

TripDetails.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function TripDetails({ name, text }) {
  return (
    <div className="tripDetails">
      <details className="tripDetails__box">
        <summary className="tripDetails__label">{name}</summary>
        <p className="tripDetails__text">{text}</p>
      </details>
    </div>
  );
}

export default TripDetails;
