
import React, { useState, useEffect } from 'react';
import '../style/main.scss'


function ProductItem(props) {

  const [quantity, setNumber] = useState(1);
  // const price = quantity*parseInt(props.price);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.textContent = `${quantity}`;
  });
  const products = props.products;

  const listProduct = products.map((product) => 
  
    <article className="productItem" key={product._id}>
        <div>
          <input type="checkbox" id={product.id} className="checkbox-round"></input>
          <label htmlFor={product.id}> {product.name}</label>
        </div>
        <article className="counterWrap">
          <img alt="imgPhoto" src= {product.image}></img>
          <div className="counter">
            <button onClick={()=>setNumber(quantity - 1 )}> - </button> {quantity} <button onClick={()=>setNumber(quantity + 1 )}> + </button> 
          </div>
        </article>
        <p> $ {product.price} </p>
    </article>
  );
    return (
      <>{listProduct}</>
    );
}
  
export default ProductItem;

