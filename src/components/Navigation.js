import "./Navigation.css";

import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/add">Add</NavLink>
      <NavLink to="/trips">Save Trips</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
}
export default Navigation;
