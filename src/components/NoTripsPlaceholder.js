import "../styles/NoTripsPlaceholder.css";
import { Link } from "react-router-dom";

function NoTripsPlaceholder() {
  return (
    <section className="noTripsContainer">
      <Link to="/Add" className="noTrips">
        <p className="noTripsContent">start your next travel</p>
      </Link>
    </section>
  );
}
export default NoTripsPlaceholder;
