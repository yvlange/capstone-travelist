import { useEffect, useState } from "react";
import "../styles/DestinationShuffle.css";

function DestinationShuffle() {
  const [capital, setCapital] = useState("");
  const [flag, setFlag] = useState();
  useEffect(() => {
    const url = "https://random-data-api.com/api/nation/random_nation";

    fetch(url)
      .then((res) => res.json())

      .then((data) => {
        const capitalData = data.capital;
        const flagData = data.flag;
        setCapital(capitalData);
        setFlag(flagData);
      })
      .catch((error) => {
        console.log("Error status: ", error.toString());
      });
  }, []);

  const text = baffle(capital);
  text.set({
    characters: "0909dudedggsedcrfefds",
    speed: 100,
  });

  text.start();
  text.reveal(10000);

  return (
    <div>
      <h3>need some travel insperation?</h3>
      <section className="inspoContainer">
        <p className="inspoCapital">{capital}</p>
        <p className="inspoFlag">{flag}</p>
      </section>
    </div>
  );
}
export default DestinationShuffle;
