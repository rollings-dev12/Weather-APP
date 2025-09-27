import cloud from "../assets/cloud.png";
import "./Mains.css";

const Mains = ({ startWeather }) => {
  return (
    <div className="main">
      <img src={cloud} alt="cloud" />;
      <div className="main-text">
        <h1>
          Weather <br></br>
          <span>ForeCasts</span>
        </h1>
        <button className="btn" onClick={startWeather}>
          Get Start
        </button>
      </div>
    </div>
  );
};

export default Mains;
