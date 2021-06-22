import { useState, useEffect } from 'react';
import {BrowserRouter as Link, useRouteMatch} from 'react-router-dom';
import '../style/main.scss'
import sandwich from '../images/sandwichMenu.svg';
import hamburger from '../images/ordersButtonHome.svg';
import aside from '../images/AcompañantesMenu.svg';
import drinks from '../images/bebidas.svg';
import {getProducts} from '../Services/products'
import ProductItem from '../components/productItem';
import simpleHamburger from '../images/simpleBurger.svg'

function MenuOrderProducts() {

  let { path, url } = useRouteMatch();

  const [products, setProducts] = useState([]);

  useEffect(()=> {
    const getData = () =>{
      getProducts()
      .then((res)=>setProducts(products => products.concat(res.data)))
      .catch((err)=>{console.log(err)})
    }
    getData()
    
  },[])
  
  const render = (items, filter) =>{
    const newitems = items.filter(productType => productType.type === filter )
    return newitems.map((prueba) => 
      console.log(prueba)
    )
  }
  //render(products, "burger")
  
    return (
      <>
        <nav className="menu">
          <button><img className="menuImg" alt="sandwich" src={sandwich}></img></button>
          <button><img className="menuImg" alt="hbmn" src={hamburger}></img></button>
          <button><img className="menuImg" alt="aside" src={aside}></img></button>
          <button><img className="menuImg" alt="drinks" src={drinks}></img></button>
        </nav>
      </>
    );
}
  
export default MenuOrderProducts;
