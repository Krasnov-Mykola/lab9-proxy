import AvtoTrafficLight from "../components/AvtoTrafficLight";
import Header from "../components/Header";
import PedestrianTrafficLight from "../components/PedestrianTrafficLight";

function Exam(){
    return(
        <>
        <div className="container">
            <Header />
        </div>

        <div className="App">
            <AvtoTrafficLight />
            <div className="traffic-light-pedestrian">
                <PedestrianTrafficLight />
            </div>
        </div>
        </>
    )
}

export default Exam;