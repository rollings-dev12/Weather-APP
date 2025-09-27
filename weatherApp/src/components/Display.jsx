import "./Display.css";
import Search from "../assets/search.png";
import Clear from "../assets/clear.png";
import House from "../assets/House.png";

const Display = ({ frontNext }) => {
  return (
    <>
      <div className="display">
        <div className="search">
          <input type="text" placeholder="Country Name" />
          <div className="search-btn">
            <img src={Search} alt="search" />
          </div>
        </div>
        <div className="temp-img">
          <img src={Clear} alt="" />
          <h2 className="location">London</h2>
          <h1>19</h1>
          <p>Tempreature</p>
          <p>
            max:20 <span>min:20</span>
          </p>
        </div>
        {/* <img src={House} alt="House" className="house" /> */}
        <div className="time-weather">
          <div className="today-date">
            <h3>Today</h3>
            <div className="date">
              <p>July, 21</p>
            </div>
          </div>
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
          </div>
          <div className="next-btn">
            <span onClick={frontNext}></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
