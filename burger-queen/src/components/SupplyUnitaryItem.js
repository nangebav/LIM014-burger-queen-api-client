import React, { useState, useEffect } from 'react';
import '../style/main.scss'
import pen from '../images/pen.svg';
import deleteUser from '../images/X.svg';
import {deleteProduct } from '../Services/products';

function SupplyUnitaryItem(props){

  const deleteProductFx = (name) => {
    deleteProduct(localStorage.token, name)
        .then(res => {
        console.log('se eliminó producto')
        return res.data})
        .catch(err => console.log(err))
}
    console.log(props.id)
    return (
        <article className="productSupply">
        <div>
          <p> {props.productName}</p>
        </div>
        <article className="supplyWrap">
          <img alt="imgPhoto" src= {props.productItemImg}></img>
          <div className="counterSupply">
            <div>15</div>
            <div className="buttonWrap">
                <img src={pen} alt="Editar" ></img>
                <img name={props.id} src={deleteUser} alt="Eliminar" onClick={e => deleteProductFx(e.target.name)}></img>
            </div>
          </div>
        </article>
      </article>

    )

}

export default SupplyUnitaryItem;