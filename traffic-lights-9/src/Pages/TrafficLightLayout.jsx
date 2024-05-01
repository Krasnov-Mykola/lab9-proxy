import Header from "../components/Header";
import TrafficLight from "../components/TrafficLight";
import { useContext, useEffect } from "react";
import TrafficLightsContext from "../context/TrafficLightsProvider";
import {useParams} from "react-router-dom"

function TrafficLightLayout() {
    
  const {direction} = useParams()


    const {setLayout}=useContext(TrafficLightsContext);
    useEffect(() => {
        setLayout(direction);
    },[direction,setLayout])

    return(
        <>
        <div className="container">
            <Header />
        </div>
        <div className="App">
          <div className={`traffic-light-${direction}`}>
            <TrafficLight />
          </div>
        </div>
        </>
)
}
export default TrafficLightLayout;