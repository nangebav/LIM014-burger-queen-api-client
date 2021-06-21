import "../style/main.scss"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import logo from "../images/burger-queen-logo.png";

function Navbar() {

    const [ show, setShow ] = useState(false);

    const [dropdown, setDropdown] = useState(false);  

    const onMouseEnter = () => {
        setDropdown(true);
    };
  
    const onMouseLeave = () => {
        setDropdown(false);

    };

    // guardar el tipo de usuario en localStorage y luego usar useEffect
    return (
      <>
        <nav className={`navbar ${ show===false ? "hide" : "show"}`}>
          <Link to="/" className="navbar-logo">
            <img alt="BQ" src={logo}></img>
          </Link>
          <ul className= "nav-menu">
            <li
              className="nav-item"
            >
              <Link
                to="/tableOrder"
                className="nav-links"
              >
                Servicio 
              </Link>
            </li>
            <li
              className="nav-item"
            >
              <Link
                to="/kitchen"
                className="nav-links"
              >
                Cocina 
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/supply"
                className="nav-links"
              >
                Admin <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown title1="Almacén" to1="/supply" title2="Personal" to2="/Personal"/>}
            </li>

          </ul>
        </nav>
      </>
    );
}

export default Navbar;