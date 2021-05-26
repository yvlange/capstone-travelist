import { useState, useEffect } from "react";
import { getSingleTripFromLocalStorage } from "../services/tripsStorage";
import { useParams } from "react-router-dom";

function useSingleTrip() {
  const [singleTrip, setSingleTrip] = useState({});
  const [firstYear, setFirstYear] = useState();
  const [firstMonth, setFirstMonth] = useState("");
  const [firstDay, setFirstDay] = useState();
  const [secondYear, setSecondYear] = useState();
  const [secondMonth, setSecondMonth] = useState("");
  const [secondDay, setSecondDay] = useState();
  const { id } = useParams();

  useEffect(() => {
    const myTrip = getSingleTripFromLocalStorage(id);
    setSingleTrip(myTrip);

    setFirstYear(myTrip.dates[0].year);
    setFirstMonth(myTrip.dates[0].month.name);
    setFirstDay(myTrip.dates[0].day);
    setSecondYear(myTrip.dates[1].year);
    setSecondMonth(myTrip.dates[1].month.name);
    setSecondDay(myTrip.dates[1].day);
  }, [
    id,
    setFirstYear,
    setFirstMonth,
    setFirstDay,
    setSecondYear,
    setSecondMonth,
    setSecondDay,
  ]);

  return {
    singleTrip,
    setSingleTrip,
    firstDay,
    firstMonth,
    firstYear,
    secondDay,
    secondMonth,
    secondYear,
  };
}
export default useSingleTrip;
