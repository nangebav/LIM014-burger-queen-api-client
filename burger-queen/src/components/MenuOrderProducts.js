import '../style/main.scss'
// import React, { useState } from "react";
import sandwich from '../images/sandwichMenu.svg';
import hamburger from '../images/ordersButtonHome.svg';
import aside from '../images/AcompañantesMenu.svg';
import drinks from '../images/bebidas.svg';

// Imagenes a Color
import sandwichColor from '../images/sandwichMenuColor.svg';
import hamburgerColor from '../images/hamburguesaColor.svg';
import asideColor from '../images/AcompañantesMenuColor.svg';
import drinksColor from '../images/bebidasColor.svg';

function MenuOrderProducts() {

    return (
        <section className="menu">
          <button><img className="menuImg" alt="sandwich" src={sandwich} 
          onMouseEnter={(e) => {e.target.setAttribute( 'src', sandwichColor)}}
          onMouseLeave={(e) => {e.target.setAttribute( 'src', sandwich)}}
          /></button>
          <button><img className="menuImg" alt="hbmn" src={hamburger}
          onMouseEnter={(e) => {e.target.setAttribute( 'src',hamburgerColor)}}
          onMouseLeave={(e) => {e.target.setAttribute( 'src', hamburger)}}
          /></button>
          <button><img className="menuImg" alt="aside" src={aside}
          onMouseEnter={(e) => {e.target.setAttribute( 'src', asideColor)}}
          onMouseLeave={(e) => {e.target.setAttribute( 'src', aside)}}          
          /></button>
          <button><img className="menuImg" alt="drinks" src={drinks}
          onMouseEnter={(e) => {e.target.setAttribute( 'src', drinksColor)}}
          onMouseLeave={(e) => {e.target.setAttribute( 'src', drinks)}}          
          /></button>
        </section>
    );
}
  
export default MenuOrderProducts;
