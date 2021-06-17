import React from 'react';
import logoBurgerQueen from '../images/BQ-logo.svg';
import comboBQ from '../images/burger-combo.png';
import '../style/main.scss'
// import Error from '../components/Error.js'
// import { useState } from 'react';
import express from 'express';
import axios from 'axios';
//const cors = require('cors');


function LogIn (){
  const app = express();
  app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, PATCH, OPTIONS HEAD");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
      const postRequest = async () => {

        const newTodo = { 
          email:'nancy@burger-queen.com',
          password:'123456',
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
          <form className="logIn-form">
            <label>
              Correo electrónico:
              <input 
              type="email" 
              name="email"
              // leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
              /*onChange={handleChange}*/
              className="inputLogIn"/>
            </label>
            <label>
              Contraseña:
              <input 
              type="password"
              name="password"
              // leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
              /*onChange={handleChange}*/
              className="inputLogIn"/>
            </label>
            <button className="logIn-button" onClick= {console.log(postRequest())}> INGRESAR </button>
          </form>
        </header>
        <img src={comboBQ} className="bQ-combo" alt="logo" />
      </div>
    );
}
  
export default LogIn;
