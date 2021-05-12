import "../styles/SavedTrip.css";
import { getSingleTripFromLocalStorage } from "../services/tripsStorage";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import TripDetails from "./TripDetails";
import { Image } from "cloudinary-react";

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
    console.log(myTrip);

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
      <TripDetails
        name="date"
        text={`${firstDay}. ${firstMonth} ${firstYear} -
          ${secondDay}. ${secondMonth} ${secondYear}`}
      />
      <TripDetails name="activities" text={singleTrip.activities} />
      <TripDetails name="restaurants" text={singleTrip.restaurants} />
      <TripDetails name="notes" text={singleTrip.notes} />
      <Image
        cloudName="dyjecx1wm"
        publicId={singleTrip.photo}
        secure="true"
        height="200"
        width="400"
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
