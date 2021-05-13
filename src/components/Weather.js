import { useEffect, useState } from "react";

function Weather({ text }) {
  const [weather, setWeather] = useState();
  const [icon, setIcon] = useState();
  useEffect(() => {
    const url = `https://api.weatherapi.com/v1/current.json?key=642f1fa5d7a142cfa13124041211205&q=${text}&aqi=no`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const weatherData = data.current.temp_c;
        // const iconData = data.current.condition.icon;
        setWeather(weatherData);

        console.log(weather);
      });
  }, []);

  return (
    <div>
      <p>The current weather is {weather}°C</p>
    </div>
  );
}
export default Weather;
