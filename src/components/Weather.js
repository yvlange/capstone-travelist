import "../styles/Weather.css";
import { useEffect, useState } from "react";

function Weather({ text }) {
  const [weather, setWeather] = useState();
  const [icon, setIcon] = useState();
  useEffect(() => {
    const url = `https://api.weatherapi.com/v1/current.json?key=642f1fa5d7a142cfa13124041211205&q=${text}&aqi=no`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const weatherData = data.current.temp_c;
        const iconData = data.current.condition.icon;
        setWeather(weatherData);
        setIcon(iconData);
      })
      .catch((error) => {
        console.log("Error status: ", error.toString());
      });
  }, [text]);

  return (
    <section className="weatherContainer">
      <p className="temperature">
        The current weather in <span className="temperature__city">{text}</span>{" "}
        is <span className="temperature__weather">{weather}°C</span>.
      </p>
      <img src={icon} alt="weather icon" className="weatherIcon" />
    </section>
  );
}
export default Weather;
