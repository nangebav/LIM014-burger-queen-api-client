import {Link, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../Services/products.js'
import {useHistory} from 'react-router-dom';
import MenuOrderProducts from '../components/MenuOrderProducts';
import ProductItem from '../components/ProductItem';
import logo from '../images/burger-queen-logo.png';
import { addOrders } from '../Services/orders.js';


function TableOrder(props) {

  const history = useHistory(); 
  const [name , setName] = useState('') //
  const [note , setNote] = useState('')
  const [products, setProducts] = useState([]);
  const [typeProduct, setTypeProduct] = useState('burger');
  const [cart , setCart] = useState([])
  const [orderClient, setOrderClient] = useState({
      /* Order*/
    client: '',
    noteClient: '',
  })

  const clientName = (event) => {
    setName(event.target.value)
  }
  const clientNote = (event) => {
    setNote(event.target.value)
  }

  const selectedProduct = (product) => {
    setCart([...cart, product])
  }
  //console.log(cart)

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


    const totalOrder = {
      "client": name ,
      "note": note,
      "products": cart,
      "total": '',
    }



  return (
       <div className="tableOrder">
          <header className="tableOrderHeader">
            <nav> 
              <input className="selectTable" placeholder="Nombre del cliente ✍" name='client' onChange={clientName} >
              </input>
            </nav>
            <img src={logo} alt="logo"></img>
          </header>
          <MenuOrderProducts setTypeProduct={setTypeProduct}/>
          <h2>Elige el tipo de producto</h2>
          <ProductItem products={products} selectedProduct={selectedProduct}/>
          <section className="bottomOrderWrap">
            <textarea rows="5" name='noteClient' placeholder=" Notas" onChange={clientNote}></textarea>
            <button className="next" onClick={()=> history.push('/orders', totalOrder )}> Siguiente</button>
          </section>
        </div>
    );
}
  
export default TableOrder;
