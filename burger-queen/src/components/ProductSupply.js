
import React, { useState, useEffect } from 'react';
import '../style/main.scss'


function ProductSupply(props) {

  const supply =12;
  const [initialSupply, setCount] = useState(supply);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.textContent = `${initialSupply}`;
  });
    return (
        <main className="productSupply">
        <div>
          <p> {props.productName}</p>
        </div>
        <article className="supplyWrap">
          <img alt="imgPhoto" src= {props.productItemImg}></img>
          <div className="counterSupply">
            <div>{supply}</div>
            <div className="initialSupply"> {initialSupply} </div>
            <div className="buttonWrap">
              <button onClick={()=>setCount(initialSupply + 1 )}> + </button> 
              <button onClick={()=>setCount(initialSupply - 1 >= 0 ? initialSupply - 1 : 0 )}> - </button> 
            </div>
          </div>
          
        </article>
      </main>
    );
}
  
export default ProductSupply;
