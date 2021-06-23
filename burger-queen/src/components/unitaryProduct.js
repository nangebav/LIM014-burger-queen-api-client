
import React, { useState, useEffect } from 'react';
import '../style/main.scss'

function UnitaryProduct(props){

    const [quantity, setNumber] = useState(1);
  // const price = quantity*parseInt(props.price);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.textContent = `${quantity}`;
  });

    return (
        <article className="productItem">
            <div>
            <input type="checkbox" id={props._id} className="checkbox-round"></input>
            <label htmlFor={props._id}> {props.name}</label>
            </div>
            <article className="counterWrap">
            <img alt="imgPhoto" src= {props.image}></img>
            <div className="counter">
                <button onClick={()=>setNumber(quantity - 1 )}> - </button> {quantity} <button onClick={()=>setNumber(quantity + 1 )}> + </button> 
            </div>
            </article>
            <p> $ {props.price*quantity} </p>
        </article>

    )

}

export default UnitaryProduct;