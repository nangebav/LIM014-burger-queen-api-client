
import React, { useState, useEffect } from 'react';
import '../style/main.scss'

function UnitaryProduct(props){

<<<<<<< HEAD
    // const [checkedItems, setCheckedItems] = useLocalStorage('checkedItems', [])
=======
>>>>>>> 582eeadfaa861e9bdb5ee377a7420a509ad8e8f8
    const [isChecked, setIsChecked] = useState(false);
    const [quantity, setNumber] = useState(1);

    // const [datos, setDatos] = useState({ })

<<<<<<< HEAD
    // const traerDatos = (event)=>{
    //     event.preventDefault()
    //     if(isChecked){

    //        setCheckedItems(datos)
    //         console.log(checkedItems)
    //     }
    // }
=======
>>>>>>> 582eeadfaa861e9bdb5ee377a7420a509ad8e8f8

    // useEffect(()=>{
    //     document.textContent = `${quantity}`;
    //     setDatos({
    //         productName: props.name,
    //         productTotalPrice: props.price*quantity,
    //         productQuantity:quantity
    //     })
    // }, [props, quantity])
    
    
    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };
  
    // console.log(isChecked)
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
                <button onClick={()=>setNumber(quantity - 1 )}> - </button> {quantity} <button onClick={()=>setNumber(quantity + 1 )}> + </button> 
            </div>
            </article>
            <p> $ {props.price*quantity} </p>
        </article>

    )

}

export default UnitaryProduct;