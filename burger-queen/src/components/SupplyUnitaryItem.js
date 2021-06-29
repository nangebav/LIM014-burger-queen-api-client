import React, { useState, useEffect } from 'react';
import '../style/main.scss'
import pen from '../images/pen.svg';
import deleteUser from '../images/X.svg';

function SupplyUnitaryItem(props){

    // console.log(isChecked)
    return (
        <article className="productSupply">
        <div>
          <p> {props.productName}</p>
        </div>
        <article className="supplyWrap">
          <img alt="imgPhoto" src= {props.productItemImg}></img>
          <div className="counterSupply">
            <div>15</div>
            <div className="initialSupply">  </div>
            <div className="buttonWrap">
                <img src={pen} alt="Editar" ></img>
                <img src={deleteUser} alt="Eliminar"></img>
            </div>
          </div>
        </article>
      </article>

    )

}

export default SupplyUnitaryItem;