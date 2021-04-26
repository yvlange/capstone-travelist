import "./Navigation.css";
import { FiPlus, FiUser } from "react-icons/fi";
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
      <NavLink to="/profile">
        <FiUser className="navigation__user" />
      </NavLink>
    </nav>
  );
}
export default Navigation;
