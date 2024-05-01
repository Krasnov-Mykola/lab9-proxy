
import "./styles.css";
import Light from "./Light";
import { useContext } from "react";
import TrafficLightsContext from "../context/TrafficLightsProvider";

const TrafficLight = () => {
  const { config,  activeColor,  layout, handleLightClick}=useContext(TrafficLightsContext);

  return (
    <div className={`traffic-light-container ${layout}`}>
      {Object.keys(config).map((color) => (
        <Light
          key={color}
          color={color}
          backgroundColor={
            activeColor === color ? config[color].backgroundColor : "gray"
          }
          onClick={() => handleLightClick(color)}
        />
      ))}
    </div>
  );
};

export default TrafficLight;
