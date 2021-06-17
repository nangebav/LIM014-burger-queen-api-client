import React, { useState } from 'react';
import logoBurgerQueen from '../images/BQ-logo.svg';
import comboBQ from '../images/burger-combo.png';
import '../style/main.scss';
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
// import Error from '../components/Error.js'
// import { useState } from 'react';
const axios = require('axios');
//const cors = require('cors');


function LogIn (){

      const postRequest = async ()=> {
        const newTodo = {
          'email':'nancy@burger-queen.com',
          'password':'abcedf'
      }
        try {
            const resp = await axios.post('http://localhost:3001/auth', newTodo);
            console.log(resp.data);
        } catch (err) {
            console.error(err);
        }
    }

  
    return (
      <div className="logIn">
        <header className="logIn-header">
        <img src={logoBurgerQueen} className="bQ-logIn" alt="logo" />
          <form className="logIn-form" >
            <label>
              Correo electrónico:
              <input 
              type="email" 
              name="email"
              // onChange={handleInputChange }
              className="inputLogIn"/>
            </label>
            <label>
              Contraseña:
              <input 
              type="password"
              name="password"
              // onChange={handleInputChange }
              className="inputLogIn"/>
            </label>
            <button className="logIn-button" onClick= {postRequest()}> INGRESAR </button>
          </form>
        </header>
        <img src={comboBQ} className="bQ-combo" alt="logo" />
      </div>
    );
}
  
export default LogIn;
