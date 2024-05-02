import PropTypes from "prop-types";
import { useContext } from "react";
import TrafficLightContext from "../context/TrafficLightsProvider";

const AvtoLight = ({ color }) => {
  const { config, avtoLight } = useContext(TrafficLightContext);
  const bg = avtoLight === color ? config[color].backgroundColor : "gray";
  return (
    <div
      className="traffic-light"
      style={{
        backgroundColor: bg,
      }}
    />
  );
};

AvtoLight.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default AvtoLight;
