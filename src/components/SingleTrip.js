import "../styles/SingleTrip.css";
import { useParams, Link } from "react-router-dom";
import TripDetails from "./TripDetails";
import Carousel from "./Carousel";
import Weather from "./Weather";
import GoBackButton from "./GoBackButton";
import useSingleTrip from "../hooks/useSingleTrip";

function SingleTrip() {
  const [
    singleTrip,
    firstYear,
    firstMonth,
    firstDay,
    secondYear,
    secondMonth,
    secondDay,
  ] = useSingleTrip({});
  const { id } = useParams();

  return (
    <div className="singleTrip" key={id}>
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
        <Link to={`/single-trip/${singleTrip.id}/edit`}>
          <button className="editButton">edit</button>
        </Link>
      </div>
    </div>
  );
}
export default SingleTrip;
