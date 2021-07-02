// import { useState, useEffect } from 'react';
// import {BrowserRouter as Link, useRouteMatch} from 'react-router-dom';
import '../style/main.scss'
import React, { useEffect, useState } from "react";
import sandwich from '../images/sandwichMenu.svg';
import hamburger from '../images/ordersButtonHome.svg';
import aside from '../images/AcompañantesMenu.svg';
import drinks from '../images/bebidas.svg'
// import { getProducts } from '../Services/products.js'

// Imagenes a Color
import sandwichColor from '../images/sandwichMenuColor.svg';
import hamburgerColor from '../images/hamburguesaColor.svg';
import asideColor from '../images/AcompañantesMenuColor.svg';
import drinksColor from '../images/bebidasColor.svg';



function MenuOrderProducts(props) {
  const [btns, setBtns] = useState([]);
  const [colorImage, setColorImage] = useState('');
  // let { path, url } = useRouteMatch();
useEffect(() =>{
//   btns.forEach(element => {
//     element.getAttribute('src') === 
// });
}, [btns])

  const clickColor = (e, imageColor, imageNotColor) =>{
    e.getAttribute('src') ===  imageNotColor ?  e.setAttribute( 'src', imageColor) : e.setAttribute( 'src', imageNotColor)
  //   if (colorImage !== e.getAttribute('alt')) {
  //     e.getAttribute('src') !== imageColor ? e.setAttribute( 'src', imageColor) : e.setAttribute( 'src', imageNotColor) 
  //  } else {
  //     console.log('no se harán cambios');
  //  }
  }

  return (
    <nav className="menu">

      <img className="menuImg" alt="sandwich" src={sandwich}
      // onMouseEnter={(e) => {e.target.setAttribute( 'src', sandwichColor)}}
      // onMouseLeave={(e) => {e.target.setAttribute( 'src', sandwich)}}
      onClick={(e) =>{
        clickColor(e.target, sandwichColor, sandwich)
        props.setTypeProduct("sandwich")
      }}
      />

      <img className="menuImg" alt="hbmn" src={hamburger}
      // onMouseEnter={(e) => {e.target.setAttribute( 'src',hamburgerColor)}}
      // onMouseLeave={(e) => {e.target.setAttribute( 'src', hamburger)}}
      onClick={(e) =>{
        clickColor(e.target,hamburgerColor, hamburger)
        props.setTypeProduct("burger")
      }}
      />

      <img className="menuImg" alt="aside" src={aside}
      // onMouseEnter={(e) => {e.target.setAttribute( 'src', asideColor)}}
      // onMouseLeave={(e) => {e.target.setAttribute( 'src', aside)}}
      onClick={(e) =>{
        clickColor(e.target,asideColor, aside)
        props.setTypeProduct("side dishes")
      }}
      />

      <img className="menuImg" alt="drinks"  src={drinks}
      // onMouseEnter={(e) => {e.target.setAttribute( 'src', drinksColor)}}
      // onMouseLeave={(e) => {e.target.setAttribute( 'src', drinks)}}
      onClick={(e) =>{
        clickColor(e.target,drinksColor,drinks)
        props.setTypeProduct("drink")
      }}
      />

    </nav>
);
}
  
export default MenuOrderProducts;