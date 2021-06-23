import "../style/main.scss"
import React, { useState, useEffect } from "react";
import { Link , useHistory, useLocation} from "react-router-dom";
import Dropdown from "./Dropdown";
import logo from "../images/burger-queen-logo.png";
import { parseJwt } from "../Services/auth";

function Navbar() {
  const history = useHistory();
  const location = useLocation();
  // console.log(history);

  // const [ admin, setShow ] = useState(parseJwt(localStorage.token).roles.admin);
    const [ admin, setShow ] = useState(false)
    
    const [dropdown, setDropdown] = useState(false);
    const [dropdownTwo, setDropdownTwo] = useState(false);  

    useEffect(() => {
      // localStorage.token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGMzNGEzMWI2NjZlZTE3OThkMzFlOGQiLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdCIsInJvbGVzIjp7ImFkbWluIjp0cnVlfSwiaWF0IjoxNjIzNTU0NzU4LCJleHAiOjk5OTk5OTk5OTk5fQ.zGMhPbJxmlZUvznOr76NqBnI2DKx0l4612qdET0-66w'
      if (localStorage.token !== '') {
        setShow(parseJwt(localStorage.token).roles.admin)
      }
    }, [admin])

    const logOut = () => {
      setShow(false);
      localStorage.token = '';
      history.push('/')
    };

    const onMouseEnter = () => {
        setDropdown(true);
    };
  
    const onMouseLeave = () => {
        setDropdown(false);
    };

    const [isHome, setIsHome] = useState(false);

    useEffect(() => {
      setIsHome( location.pathname === '/home')
    }, [location]);
    
    // guardar el tipo de usuario en localStorage y luego usar useEffect
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
                <i className={"fas fa-sign-out-alt fa-2x"} onClick={()=> logOut()}></i>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Navbar;