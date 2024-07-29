import "./Navbar.css";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to={"/"} className="logo">
          <img className="logo-img" src={logo} /> <span className="logo-text">Speed Wagon</span>
        </Link>
        <ul className="navbar">
          <li className="nav-item">
            <Link className="nav-link" to={"/newcar"}>
              New car
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
