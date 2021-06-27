
import React, { useState, useEffect } from 'react';
import '../style/main.scss'

function UnitaryProduct(props){

    const [isChecked, setIsChecked] = useState(false);
    const [quantity, setNumber] = useState(1);
    
    const [order, setOrderClient] =useState ({});
    const [datos, setDatos] = useState({})

    const { name , price, selectedProduct } = props;

    const obj = {
       name : name,
       totalPrice: price*quantity,
       quantity: quantity
    }

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
                id={props._id}
                className="checkbox-round"  
                checked={isChecked}
                onChange={handleOnChange}>
            </input>
            <span className="prueba"> </span>
            <label htmlFor={props._id}> {props.name}</label>
            </div>
            <article className="counterWrap">
            <img alt="imgPhoto" src= {props.image}></img>
            <div className="counter">
                <button onClick={()=>setNumber(quantity - 1 >= 0 ? quantity - 1 : 0 )}> - </button> {quantity} <button onClick={()=>setNumber(quantity + 1 )}> + </button> 
            </div>
            </article>
            <p> $ {props.price*quantity} </p>
        </article>

    )

}

export default UnitaryProduct;