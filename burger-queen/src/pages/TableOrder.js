import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../Services/products.js'

import MenuOrderProducts from '../components/MenuOrderProducts';
import ProductItem from '../components/productItem';
import logo from '../images/burger-queen-logo.png';
import { useLocalStorage } from '../Services/localFx.js';

function TableOrder() {

  const [products, setProducts] = useState([]);
  const [typeProduct, setTypeProduct] = useState('burger');

  useEffect(()=> {
    
    const getData = () =>{
      getProducts()
      .then((res)=> {
        const newItems = res.data.filter(productType => productType.type === typeProduct)
        setProducts(newItems);
      })
      .catch((err)=>{console.log(err)})
    }
    getData()
    
  },[typeProduct])

    const [notesClient, setNotesClient]= useLocalStorage('notesClient','')
    const [nameClient, setNameClient]= useLocalStorage('nameClient','')

    return (
      <div className="tableOrder">
        <header className="tableOrderHeader">
          <nav> 
            <input className="selectTable" placeholder=" Nombre del cliente ✍" onChange={(e)=>{setNameClient(e.target.value)}} value={nameClient}>
            </input>
          </nav>
          <img src={logo} alt="logo"></img>
        </header>
        <MenuOrderProducts setTypeProduct= {setTypeProduct}/>
        <h2>Elige el tipo de producto</h2>
        <ProductItem products={products}/>
        <section className="bottomOrderWrap">
          <textarea rows="5" placeholder=" Notas" onChange={(e)=> { setNotesClient(e.target.value)}} value={notesClient}></textarea>
          <Link to="/orders"><button className="next">Siguiente</button></Link>
        </section>

      </div>
    );
  }
  
export default TableOrder;
