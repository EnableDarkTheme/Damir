import "./nav.scss";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navigation">
      <div className="navigation">
        <NavLink to="/" className="homepage-link" activeClassName="active">
          Homepage
        </NavLink>
        <ul>
          <li>
            <NavLink to="/contact-us" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" activeClassName="active">
              About us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
