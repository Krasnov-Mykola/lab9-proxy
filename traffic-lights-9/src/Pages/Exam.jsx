import AvtoTrafficLight from "../components/AvtoTrafficLight";
import Header from "../components/Header";

function Exam(){
    return(
        <>
        <div className="container">
            <Header />
        </div>

        <div className="App">
        <AvtoTrafficLight />
        </div>
        </>
    )
}

export default Exam;