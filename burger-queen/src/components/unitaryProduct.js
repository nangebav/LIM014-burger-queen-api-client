
import React, { useState, useEffect } from 'react';
import '../style/main.scss'

function UnitaryProduct(props){

    const [isChecked, setIsChecked] = useState(false);
    const [qty, setNumber] = useState(1);
    
    const [order, setOrderClient] =useState ({});
    const [datos, setDatos] = useState({})

    const { name , price, selectedProduct } = props;

    const obj = {
       name : name,
       totalPrice: price*qty,
       qty: qty,
       productId:props.id
    }
    // console.log(obj)
    const handleOnChange = () => {
      setIsChecked(!isChecked);
      if(!isChecked){
        selectedProduct(obj)
      }
    };

    return (
        <article className="productItem">
            <div>
            <input 
                type="checkbox" 
                id={props.id}
                className="checkbox-round"  
                checked={isChecked}
                onChange={handleOnChange}>
            </input>
            <span className="prueba"> </span>
            <label htmlFor={props.id}> {props.name}</label>
            </div>
            <article className="counterWrap">
            <img alt="imgPhoto" src= {props.image}></img>
            <div className="counter">
                <button onClick={()=>setNumber(qty - 1 >= 0 ? qty - 1 : 0 )}> - </button> {qty} <button onClick={()=>setNumber(qty + 1 )}> + </button> 
            </div>
            </article>
            <p> $ {props.price*qty} </p>
        </article>
    )

}

export default UnitaryProduct;