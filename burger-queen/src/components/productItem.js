
import React, { useState, useEffect } from 'react';
import '../style/main.scss'


function ProductItem(props) {

  const [quantity, setNumber] = useState(1);
  const price = quantity*parseInt(props.price);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.textContent = `${quantity}`;
  });

    return (
        <main className="productItem">
        <div>
          <input type="checkbox" id={props.inputID} className="checkbox-round"></input>
          <label htmlFor={props.inputID}> {props.productName}</label>
        </div>
        <article className="counterWrap">
          <img alt="imgPhoto" src= {props.productItemImg}></img>
          <div className="counter">
            <button onClick={()=>setNumber(quantity - 1 )}> - </button> {quantity} <button onClick={()=>setNumber(quantity + 1 )}> + </button> 
          </div>
        </article>
        <p> $ {price} </p>
      </main>
    );
}
  
export default ProductItem;

