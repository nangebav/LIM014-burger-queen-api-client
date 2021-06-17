import React, { useState } from 'react';
import logoBurgerQueen from '../images/BQ-logo.svg';
import comboBQ from '../images/burger-combo.png';
import '../style/main.scss';
const axios = require('axios');
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
// import Error from '../components/Error.js'
// import { useState } from 'react';
// const handleChange = e => {
    // const [email, cambiarEmail] = useState({campo:'', valido:null});
    // const [password, cambiarPassword] = useState({campo:'', valido:null});
    // const objeto = {
    //   email:'',
    //   password:'',
    // };
    // const valor = e.target.value;
    // const nombre = e.target.name
  // }

   /* const expresiones = {
	  password: /^.{6,12}$/, // 4 a 12 digitos.
	 	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	 }; */

   function LogIn (){



  const [datos, setDatos] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (event) => {
  //  console.log(event.target.name)
  //  console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
  }

  const traerDatos = (event) => {
    event.preventDefault()
    const postRequest = async () => {

      const newTodo = { 
        email:datos.email,
        password:datos.password,
      }
  
      try {  
          const resp = await axios.post('http://localhost:3001/auth', newTodo);  
          console.log(resp.data);
  
      } catch (err) {  
          console.error(err);  
      }  
    }

    postRequest()
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
            <button className="logIn-button" > INGRESAR </button>
          </form>
        </header>
        <img src={comboBQ} className="bQ-combo" alt="logo" />
      </div>
    );
}
  
export default LogIn;
  