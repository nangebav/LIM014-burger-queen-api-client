import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../Services/products.js'

import MenuOrderProducts from '../components/MenuOrderProducts';
import ProductItem from '../components/productItem';
import logo from '../images/burger-queen-logo.png';
// import simpleHamburger from '../images/simpleBurger.svg'
// import doubleHamburger from '../images/doubleBurger.svg'
// import coffee from '../images/products/coffee.png'
// import latte from '../images/products/latte.png'
// import sandwich from '../images/products/sandwich.png'
// import juice from '../images/products/juice.png'
// import fries from '../images/products/fries.png'
// import water from '../images/products/water.png'
// import water2 from '../images/products/water.png'
// import soda from '../images/products/soda.png'
// import soda2 from '../images/products/soda.png'
// import onionRings from '../images/products/onionRings.png'

function TableOrder() {

  const [products, setProducts] = useState([]);
  const [typeProduct, setTypeProduct] = useState('burger');

  useEffect(()=> {
    const getData = () =>{
      getProducts()
      .then((res)=> {
        // setProducts(products => 
        // products.concat(res.data)
        // )
      const newItems = res.data.filter(productType => productType.type === typeProduct)
      setProducts(newItems);
      })
      .catch((err)=>{console.log(err)})
    }
    getData()
    
  },[typeProduct])

  

    return (
      <div className="tableOrder">
        <header className="tableOrderHeader">
          <nav> 
            <select className="selectTable">
              <option> MESA #1 </option>
              <option> MESA #2 </option>
              <option> MESA #3 </option>
              <option> MESA #4 </option>
              <option> MESA #5 </option>
              <option> MESA #6 </option>
              <option> MESA #7 </option>
            </select>
          </nav>
          <img src={logo} alt="logo"></img>
        </header>
        <MenuOrderProducts setTypeProduct= {setTypeProduct}/>
        <h2>Elige el tipo de producto</h2>
        <ProductItem products={products}/>
        <section className="bottomOrderWrap">
          <textarea rows="5" placeholder=" Notas"></textarea>
          <Link to="/orders"><button className="next">Siguiente</button></Link>
        </section>

      </div>
    );
  }
  
export default TableOrder;
