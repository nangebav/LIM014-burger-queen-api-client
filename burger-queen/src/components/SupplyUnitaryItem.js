import React, { useState, useEffect } from 'react';
import '../style/main.scss'
import pen from '../images/pen.svg';
import deleteUser from '../images/X.svg';
import { deleteProduct , postProducts, putProducts} from '../Services/products';
import Modal from 'react-modal';

function SupplyUnitaryItem(props){
  
  const deleteProductFx = (name) => {
    deleteProduct(localStorage.token, name)
        .then(res => {
        console.log('se eliminó producto')
        return res.data})
        .catch(err => console.log(err))
}
    console.log(props.id)


    Modal.setAppElement('#root')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [boxIsOpen, setBoxModalIsOpen] = useState(false)
    const [ products, setProducts] = useState({})

    const handleInputChange = (event) => {
      setProducts({
          ...products,
          [event.target.name] : event.target.value
      })
    }

    const objProduct = {
      "name": products.name,
      "price": Number(products.price),
      "type":  products.type,
      "image":  products.image,
  }
    
    const id = props.id
    console.log(products);


    console.log(id);
    const updateProducts = (obj, idProduct) =>{
      putProducts(obj, idProduct)
      .then((res)=> {
        // console.log(res)
        return res.data
       })
       .catch(() => console.log('no se pudieron guardar los cambios'))
      };
    
    
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
                <i className="fas fa-trash-alt" onClick={() => setBoxModalIsOpen(true) }></i>
                
                <Modal isOpen={boxIsOpen}
                onRequestClose={() => setBoxModalIsOpen(false)}
                className="Modal">
                  <i className="far fa-window-close" onClick={() => setBoxModalIsOpen(false)}></i>
                  <h3> ¿Segur@ que desea eliminar este producto? </h3>
                  <p> Esta acción será irreversible</p>
                  <button onClick={() => deleteProductFx(props.id)}  > Eliminar </button>
                  <button  onClick={() => setBoxModalIsOpen(false)} > Cancelar </button>
                </Modal>

                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  className="Modal"
                  // overlayClassName="Overlay"
                >
                  <i className="far fa-window-close" name={props.id} onClick={
                    () => setModalIsOpen(false)}></i>
                  <section className="productsInfo">
                    <p>Nombre:  <input name="name" defaultValue={props.productName} onChange={handleInputChange } ></input></p>
                    <p>Precio:   <input name="price" defaultValue={props.price} onChange={handleInputChange }></input></p>
                    <p>Tipo:    <input name="type" defaultValue={props.type} onChange={handleInputChange }></input></p>
                    <p>Imagen:    <input name="image" defaultValue={props.image} onChange={handleInputChange}></input></p>
                    <button onClick={()=> {
                      updateProducts(objProduct,id)}
                    }>Guardar</button>
                  </section>
                </Modal>
                
            </div>
          </div>
        </article>
      </article>

    )

}

export default SupplyUnitaryItem;