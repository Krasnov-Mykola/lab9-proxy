import { NavLink } from "react-router-dom";
import StatsBar from "./StatsBar";
function Header() {
    return(
        <>
    <div className="menu">
        <NavLink to="/" className="menu-element">Home</NavLink>
        <NavLink to="/horisontal" className="menu-element">Horizontal</NavLink>
        <NavLink to="/vertikal" className="menu-element">Vertical</NavLink>
    </div>
   <StatsBar />
    </>
)
}
export default Header;