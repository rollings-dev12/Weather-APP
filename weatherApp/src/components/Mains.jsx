import cloud from "../assets/cloud.png";
import "./Mains.css";
import House from "../assets/House.png";

const Mains = ({ startWeather }) => {
  return (
    <div className="main">
      <img src={cloud} alt="cloud" style={{ width: "60%" }} />;
      <div className="main-text">
        <h1>
          Weather <br></br>
          <span>ForeCasts</span>
        </h1>
        <button className="btn" onClick={startWeather}>
          Get Start
        </button>
      </div>
      <img
        src={House}
        alt="house"
        style={{ width: "75%", marginTop: "20px" }}
      />
    </div>
  );
};

export default Mains;
