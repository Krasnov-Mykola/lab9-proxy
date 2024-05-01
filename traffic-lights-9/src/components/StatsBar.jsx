
import "./styles.css";
import { useContext } from "react";
import TrafficLightsContext from "../context/TrafficLightsProvider";

const StatsBar = () => {
  const {config} = useContext(TrafficLightsContext)
  return (
    <div className="stats-bar">
      <button>Змінити вигляд</button>
      <div className="count">
        <div className="color" style={{color:"red"}}> red: {config.red.count}</div>
        <div className="color" style={{color:"yellow"}}> yellow: {config.yellow.count}</div>
        <div className="color" style={{color:"green"}}> green: {config.green.count}</div>
      </div>
    </div>
  );
};
export default StatsBar;
