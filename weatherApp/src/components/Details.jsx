import "./Display.css";
import "./Details.css";
import { useState } from "react";

const Details = ({ weather }) => {
  if (!weather) return <p>Loading...</p>;

  const [startIndex, setStartIndex] = useState(0);
  const windowSize = 4;

  const visibleForecast = weather.forecast.slice(
    startIndex,
    startIndex + windowSize
  );

  const handleNext = () => {
    if (startIndex + windowSize < weather.forecast.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="display">
        <div className="temp-img">
          <h2 className="location">{weather.today.location}</h2>
          <p>Tempreature</p>
          <p>
            {weather.today.temperature}
            <span>min:20</span>
          </p>
        </div>
        <h3 className="days">7-Days forecast</h3>
        <div className="time">
          {visibleForecast.map((day, i) => (
            <div key={i} className="today-time">
              <p>{day.temp}°C</p>
              <div>
                <img src={day.icon} alt="forecast" />
              </div>
              <div className="day-info">
                <strong>
                  {new Date(day.time).toLocaleDateString([], {
                    weekday: "short",
                  })}
                </strong>
                <span>{new Date(day.time).getDate()}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="next-btn">
          <span onClick={handlePrev}></span>
          <span onClick={handleNext}></span>
        </div>
      </div>
      <div className="weather">
        <div className="weather-details">
          <p>Wind</p>
          <div>
            <h2>{weather.today.windSpeed}</h2>
          </div>
        </div>
        <div className="weather-details">
          <p>Humidty</p>
          <div>
            <h2>{weather.today.humidity}</h2>
          </div>
        </div>
        <div className="weather-details">
          <p>Atomspheric</p>
          <div>
            <h2>{weather.today.pressure}</h2>
          </div>
        </div>
        <div className="weather-details">
          <p>Sea Leavel</p>
          <div>
            <h2>{weather.today.seaLevel}</h2>
          </div>
        </div>
        <div className="weather-details">
          <p>Longitude</p>
          <div>
            <h2>{weather.today.lon}</h2>
          </div>
        </div>
        <div className="weather-details">
          <p>Latitude</p>
          <div>
            <h2>{weather.today.lat}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
