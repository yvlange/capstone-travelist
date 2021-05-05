import "../styles/SavedTrip.css";
import { getSingleTripFromLocalStorage } from "../services/tripsStorage";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import TripDetails from "./TripDetails";

function SavedTrip() {
  const [singleTrip, setSingleTrip] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const myTrip = getSingleTripFromLocalStorage(id);
    setSingleTrip(myTrip);
  }, [id]);

  return (
    <div className="savedTrip" key={id}>
      <h3>
        your trip to <p>{singleTrip.destination}</p>
      </h3>
      <TripDetails name="activities" text={singleTrip.activities} />
      <TripDetails name="restaurants" text={singleTrip.restaurants} />
      <TripDetails name="notes" text={singleTrip.notes} />
      <div className="editButtonBox">
        <Link to={`/saved-trips/${singleTrip.id}/edit`}>
          <button className="editButton">edit</button>
        </Link>
      </div>
    </div>
  );
}

export default SavedTrip;
