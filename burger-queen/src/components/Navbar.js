import "../style/main.scss"
import React, { useState, useEffect } from "react";
import { Link , useHistory, useLocation} from "react-router-dom";
import Dropdown from "./Dropdown";
import logo from "../images/burger-queen-logo.png";
import { parseJwt } from "../Services/localFx";

function Navbar() {
    const history = useHistory();
    const location = useLocation();


    const [ admin, setShow ] = useState(false)
    const [dropdown, setDropdown] = useState(false);
    const [dropdownTwo, setDropdownTwo] = useState(false);  

    useEffect(() => {
      // fx para reconocer si el token tiene admin true o false y reconozca el cambio
      if (localStorage.token !== '') {
        setShow(parseJwt(localStorage.token).roles.admin)
      }
    }, [admin])

    // fx para salir al login y "cerrar sesión"
    const logOut = () => {
      setShow(false);
      localStorage.token = ''; // cambiando valor de token a vacío
      history.push('/')
    };

    // funciones para activar o desactivar dropdown con hover
    const onMouseEnter = () => {
        setDropdown(true);
    };
    const onMouseLeave = () => {
        setDropdown(false);
    };

    const [isHome, setIsHome] = useState(false);

    //
    useEffect(() => {
      setIsHome( location.pathname === '/home') // llevar a home al loguearse
    }, [location]);


    return (
      <>
        <nav className={`navbar ${ isHome || !admin ? "hide" : ""}`}>
          <Link to="/home" className="navbar-logo">
            <img alt="BQ" src={logo}></img>
          </Link>
          <ul className= "nav-menu">
            <li
              className="nav-item"
              onMouseEnter={() => setDropdownTwo(true)}
              onMouseLeave={() => setDropdownTwo(false)}
            >
              <Link
                to="/tableOrder"
                className="nav-links"
              >
                Servicio <i className="fas fa-caret-down" />
              </Link>
              {dropdownTwo && <Dropdown title1="Carta" to1="/tableOrder" title2="Ordenes" to2="/OrdersStatus"/>}
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
              className={`nav-item ${admin ===false ? "hide" : "show"}`}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/supply" 
                className="nav-links"
              >
                Admin <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown title1="Almacén" to1="/supply" title2="Personal" to2="/AdminEmployes"/>}
            </li>
            <li className="nav-item" >
                <i className="fas fa-sign-out-alt fa-2x" onClick={()=> logOut()}></i>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Navbar;
