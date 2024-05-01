import "./styles.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";



const Light = ({ backgroundColor, onClick }) => {
  const ref = useRef(1);
  const [isClick, setIsClick] = useState(true);
  useEffect(() => {}, [isClick]);

  const handleClick = () => {
    ref.current++;
    setIsClick(!isClick);
    onClick();
  };

  return (
    <motion.div
      className="traffic-light"
      key={ref.current}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: onClick ? [1, 0.5, 1] : 0, scale: 1, }}
      transition={{ duration: 1 }}
      style={{
        backgroundColor: backgroundColor,
      }}
      onClick={handleClick}
      
    />
  );
};

Light.propTypes = {
  // backgroundColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Light;
