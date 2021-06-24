import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts, getProductId } from '../Services/products.js'

import MenuOrderProducts from '../components/MenuOrderProducts';
import ProductItem from '../components/productItem';
import logo from '../images/burger-queen-logo.png';
import { useLocalStorage } from '../hooks/useLocalStorage';
import useCart from '../hooks/useCart.js';
import CartContext from '../hooks/CartContext.js';

function TableOrder() {

  const {client} = useCart();

  console.log(useCart());

 const [orderClient, setOrderClient] = useState({
  client: '',
  order: 2,
  noteClient: '',
  time: ''
 })

 const handleClientChange = (e) => {
  //  console.log(event.target.name)
  //  console.log(event.target.value)
  setOrderClient({
        ...orderClient,
        [e.target.name] : e.target.value
    })
  }
  // console.log(orderClient);

  const dataCart = {
    client: orderClient.client,
    order: orderClient.order,
    noteClient: orderClient.noteClient,
    time: null
  }

  console.log(dataCart);

  getProductId('001')
    .then((res) => res)
    .catch((err) => console.error(err))

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

 // console.log(dataCart);
    return (
    <CartContext.Provider value = {dataCart}>
        <div className="tableOrder">
          <header className="tableOrderHeader">
            <nav> 
              <input className="selectTable" value={client}  placeholder=" Nombre del cliente ✍" name='client' onChange= {handleClientChange}>
              </input>
            </nav>
            <img src={logo} alt="logo"></img>
          </header>
          <MenuOrderProducts setTypeProduct= {setTypeProduct}/>
          <h2>Elige el tipo de producto</h2>
          <ProductItem products={products}/>
          <section className="bottomOrderWrap">
            <textarea rows="5" name='noteClient' placeholder=" Notas" onChange= {handleClientChange} ></textarea>
            <Link to="/orders"><button className="next">Siguiente</button></Link>
          </section>
        </div>
      </CartContext.Provider>
    );
  }
  
export default TableOrder;
