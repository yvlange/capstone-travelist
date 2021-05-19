import "../styles/SavedTrip.css";
import { getSingleTripFromLocalStorage } from "../services/tripsStorage";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import TripDetails from "./TripDetails";
import { Image } from "cloudinary-react";
import Weather from "./Weather";

function SavedTrip() {
  const [singleTrip, setSingleTrip] = useState({});
  const { id } = useParams();
  const [firstYear, setFirstYear] = useState();
  const [firstMonth, setFirstMonth] = useState("");
  const [firstDay, setFirstDay] = useState();
  const [secondYear, setSecondYear] = useState();
  const [secondMonth, setSecondMonth] = useState("");
  const [secondDay, setSecondDay] = useState();

  useEffect(() => {
    const myTrip = getSingleTripFromLocalStorage(id);
    setSingleTrip(myTrip);

    setFirstYear(myTrip.dates[0].year);
    setFirstMonth(myTrip.dates[0].month.name);
    setFirstDay(myTrip.dates[0].day);
    setSecondYear(myTrip.dates[1].year);
    setSecondMonth(myTrip.dates[1].month.name);
    setSecondDay(myTrip.dates[1].day);
  }, [id]);

  return (
    <div className="savedTrip" key={id}>
      <h3>
        your trip to <p>{singleTrip.destination}</p>
      </h3>
      <Weather text={singleTrip.destination} />
      <TripDetails
        name="date"
        text={`${firstDay}. ${firstMonth} ${firstYear} -
          ${secondDay}. ${secondMonth} ${secondYear}`}
      />
      <TripDetails name="activities" text={singleTrip.activities} />
      <TripDetails name="locations" text={singleTrip.locations} />
      <TripDetails name="notes" text={singleTrip.notes} />
      <Image
        className="uploadedImage"
        cloudName="dyjecx1wm"
        publicId={singleTrip.photos}
        secure="true"
      />
      <div className="editButtonBox">
        <Link to={`/saved-trips/${singleTrip.id}/edit`}>
          <button className="editButton">edit</button>
        </Link>
      </div>
    </div>
  );
}

export default SavedTrip;
