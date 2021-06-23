import "../style/main.scss"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import logo from "../images/burger-queen-logo.png";
import { parseJwt } from "../Services/auth";

function Navbar() {


    // const [ admin, setShow ] = useState(parseJwt(localStorage.token).roles.admin);
    const [ admin, setShow ] = useState(false)
    const [dropdown, setDropdown] = useState(false);  

    useEffect(() => {
      localStorage.token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGMzNGEzMWI2NjZlZTE3OThkMzFlOGQiLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdCIsInJvbGVzIjp7ImFkbWluIjp0cnVlfSwiaWF0IjoxNjIzNTU0NzU4LCJleHAiOjk5OTk5OTk5OTk5fQ.zGMhPbJxmlZUvznOr76NqBnI2DKx0l4612qdET0-66w'
      setShow(parseJwt(localStorage.token).roles.admin)
    }, [])

    const onMouseEnter = () => {
        setDropdown(true);
    };
  
    const onMouseLeave = () => {
        setDropdown(false);

    };

    
    // guardar el tipo de usuario en localStorage y luego usar useEffect
    return (
      <>
        <nav className={`navbar ${ admin ===false ? "hide" : ""}`}>
          <Link to="/" className="navbar-logo">
            <img alt="BQ" src={logo}></img>
          </Link>
          <ul className= "nav-menu">
            <li key="tableOrder"
              className="nav-item"
            >
              <Link
                to="/tableOrder"
                className="nav-links"
              >
                Servicio 
              </Link>
            </li>
            <li key="kitchen"
              className="nav-item"
            >
              <Link
                to="/kitchen"
                className="nav-links"
              >
                Cocina 
              </Link>
            </li>
            <li key="admin"
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
              {dropdown && <Dropdown title1="Almacén" to1="/supply" title2="Personal" to2="/AdminEmployes"/>}
            </li>

          </ul>
          <button onClick={()=> setShow(false)}>
          SALIR
          </button>
        </nav>
      </>
    );
}

export default Navbar;