import "../styles/TripDetails.css";

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
