import "./Display.css";
import House from "../assets/House.png";
import "./Details.css";
const Details = () => {
  return (
    <>
      <div className="display">
        <div className="temp-img">
          <h2 className="location">London</h2>
          <p>Tempreature</p>
          <p>
            max:20 <span>min:20</span>
          </p>
        </div>
        <h3 className="days">7-Days forecast</h3>
        <div className="time">
          <div className="today-time">
            <p>19c</p>
            <dv>
              <img src={House} alt="clear" />
            </dv>
            <p>15:00</p>
          </div>
          <div className="today-time">
            <p>19c</p>
            <dv>
              <img src={House} alt="clear" />
            </dv>
            <p>15:00</p>
          </div>
          <div className="today-time">
            <p>19c</p>
            <dv>
              <img src={House} alt="clear" />
            </dv>
            <p>15:00</p>
          </div>
          <div className="today-time">
            <p>19c</p>
            <dv>
              <img src={House} alt="clear" />
            </dv>
            <p>15:00</p>
          </div>
        </div>
        <div className="next-btn">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="weather">
        <div className="weather-details">
          <p>Wind</p>
          <div>
            <h2>45</h2>
          </div>
        </div>
        <div className="weather-details">
          <p>Humidty</p>
          <div>
            <h2>45</h2>
          </div>
        </div>
        <div className="weather-details">
          <p>Atomspheric</p>
          <div>
            <h2>45</h2>
          </div>
        </div>
        <div className="weather-details">
          <p>Sea Leavel</p>
          <div>
            <h2>45</h2>
          </div>
        </div>
        <div className="weather-details">
          <p>Longitude</p>
          <div>
            <h2>45</h2>
          </div>
        </div>
        <div className="weather-details">
          <p>Latitude</p>
          <div>
            <h2>45</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
