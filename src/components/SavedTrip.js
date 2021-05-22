import "../styles/SavedTrip.css";
import { getSingleTripFromLocalStorage } from "../services/tripsStorage";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import TripDetails from "./TripDetails";
import Carousel from "./Carousel";
import Weather from "./Weather";
import GoBackButton from "./GoBackButton";

function SavedTrip() {
  const [singleTrip, setSingleTrip] = useState({});
  const { id } = useParams();
  const [firstYear, setFirstYear] = useState("");
  const [firstMonth, setFirstMonth] = useState("");
  const [firstDay, setFirstDay] = useState("");
  const [secondYear, setSecondYear] = useState("");
  const [secondMonth, setSecondMonth] = useState("");
  const [secondDay, setSecondDay] = useState("");

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
  console.log(singleTrip);

  return (
    <div className="savedTrip" key={id}>
      <h3>
        your trip to <p>{singleTrip.destination}</p>
      </h3>
      <Weather text={singleTrip.destination} />
      <TripDetails
        name="travel dates"
        text={`${firstDay}. ${firstMonth} ${firstYear} -
          ${secondDay}. ${secondMonth} ${secondYear}`}
      />
      <TripDetails name="activities" text={singleTrip.activities} />
      <TripDetails name="locations" text={singleTrip.locations} />
      <TripDetails name="notes" text={singleTrip.notes} />

      <Carousel name="photos" images={singleTrip.photos} />

      <div className="buttonBox">
        <GoBackButton />
        <Link to={`/saved-trip/${singleTrip.id}/edit`}>
          <button className="editButton">edit</button>
        </Link>
      </div>
    </div>
  );
}
export default SavedTrip;
