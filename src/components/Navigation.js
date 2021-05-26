import "../styles/Navigation.css";
import { FiPlus } from "react-icons/fi";
import { FaLightbulb } from "react-icons/fa";
import { FaSuitcaseRolling } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/add" activeClassName="selected">
        <FiPlus className="navigation__plus" />
      </NavLink>
      <NavLink to="/trips" activeClassName="selected">
        <FaSuitcaseRolling className="navigation__suitcase" />
      </NavLink>
      <NavLink to="/destinationShuffle" activeClassName="selected">
        <FaLightbulb className="navigation__inspo" />
      </NavLink>
    </nav>
  );
}
export default Navigation;
