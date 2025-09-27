import Mains from "./components/mains";
import Display from "./components/Display";
import Details from "./components/Details";
import "./App.css";
import { useEffect, useState } from "react";

import Clear_icon from "./assets/humidity.png";
import Cloud_icon from "./assets/drizzle.png";
import rain_icon from "./assets/rain.png";

const App = () => {
  const [Start, setStart] = useState(false);
  const [Next, setNext] = useState(false);

  const [weatherData, setweatherData] = useState(false);

  const allIcons = {
    "01d": Clear_icon,
    "01n": Clear_icon,
    "02d": Cloud_icon,
    "09d": rain_icon,
  };
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d582ce3b6058f9435bad3498d8555697&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      const dailyForecast = [];
      const seenDays = new Set();

      data.list.forEach((item) => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString([], { weekday: "short" });

        if (!seenDays.has(day)) {
          dailyForecast.push({
            temp: Math.round(item.main.temp),
            icon: allIcons[item.weather[0].icon] || Clear_icon,
            time: item.dt * 1000,
          });
          seenDays.add(day);
        }
      });

      const today = data.list[0];
      const icon = allIcons[today.weather[0].icon] || Clear_icon;
      setweatherData({
        today: {
          humidity: today.main.humidity,
          windSpeed: today.wind.speed,
          weatherCondition: today.weather[0].description,
          pressure: today.main.pressure,
          seaLevel: today.main.sea_level,
          temperature: Math.floor(today.main.temp),
          location: data.city.name,
          lon: data.city.coord.lon,
          lat: data.city.coord.lat,
          icon: icon,
        },
        forecast: dailyForecast,
      });
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };
  useEffect(() => {
    search("london");
  }, []);
  return (
    <div className="weather-contanier">
      {!Start && (
        <Mains startWeather={() => setStart(true)} weather={weatherData} />
      )}

      {Start && !Next && (
        <Display frontNext={() => setNext(true)} weather={weatherData} />
      )}

      {Start && Next && (
        <Details backNext={() => setNext(false)} weather={weatherData} />
      )}
    </div>
  );
};

export default App;
