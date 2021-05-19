import { useEffect, useState } from "react";
import "../styles/DestinationShuffle.css";

function DestinationShuffle() {
  const [capital, setCapital] = useState("");

  useEffect(() => {
    const url = "https://random-data-api.com/api/nation/random_nation";

    fetch(url)
      .then((res) => res.json())

      .then((data) => {
        const capitalData = data.capital;

        setCapital(capitalData);
      })
      .catch((error) => {
        console.log("Error status: ", error.toString());
      });
  }, []);

  return (
    <div>
      <h3>need some travel insperation?</h3>
      <section className="inspoContainer">
        <p className="inspoCapital">{capital}</p>
      </section>
    </div>
  );
}
export default DestinationShuffle;
