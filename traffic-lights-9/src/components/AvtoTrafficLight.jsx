import { useContext, useEffect } from "react";
import TrafficLightContext from "../context/TrafficLightsProvider";
import AvtoLight from "./AvtoLight";
import "../components/styles.css";

const AvtoTrafficLight = () => {
  const { config, avtoLight, setAvtoLight } = useContext(TrafficLightContext);
  useEffect(() => {
    const { duration, next } = config[avtoLight];
    const timerId = setTimeout(() => setAvtoLight(next), duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [config, avtoLight]);
  return (
    <div className="traffic-light-container">
      {Object.keys(config).map((color) => (
        <AvtoLight
          key={color}
          color={color}
          backgroundColor={
            color === avtoLight ? config[color].backgroundColor : "transparent"
          }
        />
      ))}
    </div>
  );
};

export default AvtoTrafficLight;
