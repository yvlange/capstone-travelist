import "../styles/Navigation.css";
import { FiPlus } from "react-icons/fi";
import { FaLightbulb } from "react-icons/fa";
import { FaSuitcaseRolling } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/add">
        <FiPlus className="navigation__plus" />
      </NavLink>
      <NavLink to="/trips">
        <FaSuitcaseRolling className="navigation__suitcase" />
      </NavLink>
      <NavLink to="/destinationShuffle">
        <FaLightbulb className="navigation__inspo" />
      </NavLink>
    </nav>
  );
}
export default Navigation;
