import Mains from "./components/mains";
import Display from "./components/Display";
import Details from "./components/Details";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [Start, setStart] = useState(false);
  const [Next, setNext] = useState(false);

  const [weatherData, setweatherData] = useState(false);
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d582ce3b6058f9435bad3498d8555697&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setweatherData({
        today: {
          humidity: today.main.humidity,
          windSpeed: today.wind.speed,
          weatherCondition: today.weather[0].description,
          pressure: today.main.pressure,
          seaLevel: today.main.sea_level,
          temperature: Math.floor(today.main.temp),
          lon: data.city.coord.lon,
          lat: data.city.coord.lat,
        },
      });
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };
  useEffect(() => {
    search("London");
  }, {});
  return (
    <div className="weather-contanier">
      {!Start && <Mains startWeather={() => setStart(true)} />}

      {Start && !Next && <Display frontNext={() => setNext(true)} />}

      {Start && Next && <Details backNext={() => setNext(false)} />}
    </div>
  );
};

export default App;
