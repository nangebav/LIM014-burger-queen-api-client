import React, { useState, useEffect } from 'react';
import '../style/main.scss'
import Modal from 'react-modal';
import { postProducts, putProducts } from '../Services/products';

function SupplyUnitaryItem(props){


    Modal.setAppElement('#root')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [ products, setProducts] = useState({})

    const handleInputChange = (event) => {
      setProducts({
          ...products,
          [event.target.name] : event.target.value
      })
    }
    
    const id = props.id
    const updateProducts = (obj, idProduct) =>{
      putProducts(obj, idProduct)
      .then((res)=> {
        // console.log(res)
        return res.data
       }
     )};
    
    
    // console.log(isChecked)
    return (
        <article className="productSupply">
        <div>
          <p> {props.productName}</p>
        </div>
        <article className="supplyWrap">
          <img alt="imgPhoto" src= {props.productItemImg}></img>
          <div className="counterSupply">

            <div className="buttonWrap">
                <i className="fas fa-edit" onClick={() => setModalIsOpen(true)}></i>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  className="Modal"
                  // overlayClassName="Overlay"
                >
                  <i className="far fa-window-close" onClick={() => setModalIsOpen(false)}></i>
                  <section className="productsInfo">
                    <p>Nombre:  <input name="name" placeholder={props.productName} onChange={handleInputChange } ></input></p>
                    <p>Precio:   <input name="price" placeholder={props.price} onChange={handleInputChange }></input></p>
                    <p>Tipo:    <input name="type" placeholder={props.type} onChange={handleInputChange }></input></p>
                    <button onClick={()=> 
                      //console.log(products)
                      updateProducts(products,id)
                    }>Guardar</button>
                  </section>
                </Modal>
                <i className="fas fa-trash-alt"></i>
            </div>
          </div>
        </article>
      </article>

    )

}

export default SupplyUnitaryItem;