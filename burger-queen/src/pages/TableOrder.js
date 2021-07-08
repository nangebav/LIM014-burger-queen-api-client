import {Link, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../Services/products.js'
import {useHistory} from 'react-router-dom';
import MenuOrderProducts from '../components/menuOrders/MenuOrderProducts';
import ProductItem from '../components/menuOrders/ProductItem';
import logo from '../images/burger-queen-logo.png';



function TableOrder(props) {

  const history = useHistory(); 
  const [name , setName] = useState('') //

  const [products, setProducts] = useState([]);
  const [typeProduct, setTypeProduct] = useState('burger');
  const [cart , setCart] = useState([])

  const [messageName, setMessageName] = useState('')

  const clientName = (event) => {
    setName(event.target.value)
  }


  const selectedProduct = (product) => {

    const productList = products.map((el)=>{
      const elem = el
     
      if(el._id === product.productId){
        elem.qty = product.qty
        elem.checked = product.checked 
      }
      return elem
    })
    setProducts(productList);
    //console.log(productList);
    setCart([
      ...cart, 
      product]);

  };

  useEffect( ()=> {
    // const getData = async() =>{
      // getProducts(localStorage.token)
        getProducts(localStorage.token,1,50)
        .then((res)=>{setProducts(res.data);
        console.log(res.data);})
        // const newItems = res.data.filter(productType => productType.type.toUpperCase() === typeProduct.toUpperCase())
        // setProducts(res.data);
    // }
    // getData()
    
  },[])

  //const cardChecked = cart.filter(obj => obj.checked === true)
  // console.log(cardChecked);
  // console.log(cart);
  let priceProducts = cart.map(c => c.totalPrice);

  let total = priceProducts.reduce((a, b) => a + b, 0);

    const totalOrder = {
      "client": name ,
      "products": cart,
      "total": total,
    }

console.log(totalOrder.products.length);
console.log(totalOrder)

  return (
       <div className="tableOrder">
          <header className="tableOrderHeader">
            <nav> 
              <input className="selectTable" placeholder="Nombre del cliente ✍" name='client' onChange={clientName} onClick={() => setMessageName('')}>
              </input>
              <p className="errorName">{messageName}</p>
            </nav>
            <img src={logo} alt="logo"></img>
          </header>
          <MenuOrderProducts setTypeProduct={setTypeProduct}/>
          <section className="description">
            <h2>Elige el tipo de producto</h2>
            <p className="errorName">{messageName ? '⚠️ Llenar casillas' : '' }</p>
          </section>
          <ProductItem products={products.filter(productType => productType.type.toUpperCase() === typeProduct.toUpperCase())} selectedProduct={selectedProduct} total ={total} />
          <section className="bottomOrderWrap">
            <button className="nextPage" onClick={()=> totalOrder.products.length !== 0 && totalOrder.client ? history.push('/orders', totalOrder) : setMessageName('Campo Obligatorio!')}> Siguiente</button>
          </section>
        </div>
    );
}
  
export default TableOrder;
