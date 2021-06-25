
import {Link} from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { getProducts } from '../Services/products.js'

import MenuOrderProducts from '../components/MenuOrderProducts';
import ProductItem from '../components/productItem';
import logo from '../images/burger-queen-logo.png';
// import { useLocalStorage } from '../hooks/useLocalStorage';
// import UseCart from '../hooks/useCart.js';
// import CartContext from '../hooks/CartContext.js';

function TableOrder() {

// const  { client, handleClientChange }= useContext(CartContext)
// console.log(client);
//  const noteClient = UseCart();
//  console.log(noteClient);

// const [orderClient, setOrderClient] = useState({
  /* Order*/
// client: '',
//  noteClient: '',
// })

//  const handleClientChange = (e) => {
//   //  console.log(event.target.name)
//   //  console.log(event.target.value
//   setOrderClient({
//         ...orderClient,
//         [e.target.name] : e.target.value
//     })
    
//   }

//   console.log(orderClient);

//    const dataCart = {
//      client: orderClient.client,
//      noteClient: orderClient.noteClient,
//      products: [{
//      product: '',
//      quanty:'',
//      price:'',
//      }
//    ]
//  }

  // console.log(dataCart);

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
       <div className="tableOrder">
          <header className="tableOrderHeader">
            <nav> 
              <input className="selectTable" placeholder="Nombre del cliente ✍" name='client' >
              </input>
            </nav>
            <img src={logo} alt="logo"></img>
          </header>
          <MenuOrderProducts setTypeProduct={setTypeProduct}/>
          <h2>Elige el tipo de producto</h2>
          <ProductItem products={products}/>
          <section className="bottomOrderWrap">
            <textarea rows="5" name='noteClient' placeholder=" Notas"></textarea>
            <Link to="/orders"><button className="next">Siguiente</button></Link>
          </section>
        </div>
    );
  }
  
export default TableOrder;
