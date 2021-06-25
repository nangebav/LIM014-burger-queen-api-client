// import logo from '../images/burger-queen-logo.png';
import '../style/main.scss'
import ProductSupply from '../components/ProductSupply'
import { useEffect, useState } from 'react'
import { getProducts } from '../Services/products';

function ProductsListSupply() {

    const [products, setProducts] = useState([]);


    useEffect(()=> {
      
      const getData = () =>{
        getProducts()
        .then((res)=> {
          setProducts(res.data);
        })
        .catch((err)=>{console.log(err)})
      }
      getData()
      
    },)
  
    
    return (
        <>
            <header className="productSupplyHeader"> 
                <p>Lista de Productos</p>
                <p>Inventario Inicial</p>
                <p>Inventario Actual</p>
            </header>
            
            <section className="productsListSupply">
                <ProductSupply products={products} />
            </section>
        </>
    )}

export default ProductsListSupply;