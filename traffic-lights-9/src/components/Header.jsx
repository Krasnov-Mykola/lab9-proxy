import { NavLink } from "react-router-dom";
function Header() {
    return(
        <>
    <div className="menu">
        <NavLink to="/" className="menu-element">Home</NavLink>
        <NavLink to="/horisontal" className="menu-element">Horizontal</NavLink>
        <NavLink to="/vertikal" className="menu-element">Vertical</NavLink>
        <NavLink to="/exam" className="menu-element">Exam</NavLink>
    </div>
   
    </>
)
}
export default Header;