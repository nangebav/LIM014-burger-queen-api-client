import React, { useState } from 'react';
import logoBurgerQueen from '../images/BQ-logo.svg';
import comboBQ from '../images/burger-combo.png';
import '../style/main.scss';
const axios = require('axios');
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
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
          <form className="logIn-form" onSubmit={traerDatos}>
            <label>
              Correo electrónico:
              <input 
              type="email" 
              name="email"
              onChange={handleInputChange }
              className="inputLogIn"/>
            </label>
            <label>
              Contraseña:
              <input 
              type="password"
              name="password"
              onChange={handleInputChange }
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
