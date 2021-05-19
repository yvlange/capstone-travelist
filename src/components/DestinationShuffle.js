import { useEffect, useState } from "react";
import "../styles/DestinationShuffle.css";

function DestinationShuffle() {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const url = "https://random-data-api.com/api/address/random_address";

    fetch(url)
      .then((res) => res.json())

      .then((data) => {
        const countryData = data.country;

        setCountry(countryData);
      })
      .catch((error) => {
        console.log("Error status: ", error.toString());
      });
  }, []);

  return (
    <div>
      <h3>where should you travel next?</h3>
      <p className="inspoCountry">{country}</p>
    </div>
  );
}
export default DestinationShuffle;
