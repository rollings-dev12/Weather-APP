import "./Display.css";
import Search from "../assets/search.png";

const Display = ({ frontNext, weather, inputRef, onSearch }) => {
  if (!weather || !weather.today) {
    return <p>Loading...</p>;
  }
  const now = new Date();
  const dayName = now.toLocaleDateString([], { weekday: "short" });
  const dateStr = now.toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });

  const visibleForecast = weather.forecast.slice(0, 3);

  return (
    <>
      <div className="display">
        <div className="search">
          <input ref={inputRef} type="text" placeholder="Country Name" />
          <div className="search-btn" onClick={onSearch}>
            <img src={Search} alt="search" />
          </div>
        </div>
        <div className="temp-img">
          <img src={weather.today.icon} alt="" />
          <h2 className="location">{weather.today.location}</h2>
          <p>Tempreature</p>
          <h1>{weather.today.temperature}</h1>
        </div>
        {/* <img src={House} alt="House" className="house" /> */}
        <div className="time-weather">
          <div className="today-date">
            <h3>{dayName}</h3>
            <div className="date">
              <p>{dateStr}</p>
            </div>
          </div>
          <div className="time">
            {visibleForecast.map((item, index) => (
              <div className="today-time" key={index}>
                <p>{item.temp}°C</p>
                <div>
                  <img src={item.icon} alt="weather icon" />
                </div>
                {new Date(item.time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            ))}
          </div>
          <div className="next-btn">
            <span onClick={frontNext}></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
