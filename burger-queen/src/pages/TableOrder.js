import {Link, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../Services/products.js'
import {useHistory} from 'react-router-dom';
import MenuOrderProducts from '../components/menuOrders/MenuOrderProducts';
import ProductItem from '../components/menuOrders/ProductItem';
import logo from '../images/burger-queen-logo.png';
import ReactPaginate from 'react-paginate';



function TableOrder(props) {

  const history = useHistory(); 
  const [name , setName] = useState('') //
  const [note , setNote] = useState('')
  const [products, setProducts] = useState([]);
  const [typeProduct, setTypeProduct] = useState('burger');
  const [cart , setCart] = useState([])
  const [offset, setOffset] = useState(0);

  const clientName = (event) => {
    setName(event.target.value)
  }

  const selectedProduct = (product) => {

    const productList = products.map((el)=>{
      const elem = el
     
      if(el._id === product.productId){
        elem.qty = product.qty
        elem.checked = product.checked 

        // if(product.checked === false){
        //   delete elem.qty;
        //   delete elem.checked
        // }
      }
     
      return elem
    })

    setProducts(productList);
    // console.log(productList);
    setCart([
      ...cart, 
      product]);
    //console.log(product)
  };

  useEffect( ()=> {
    // const getData = async() =>{
      // getProducts(localStorage.token)
        getProducts(offset,12)
        .then((res)=>setProducts(res.data))
        // const newItems = res.data.filter(productType => productType.type.toUpperCase() === typeProduct.toUpperCase())
        // setProducts(res.data);
    // }
    // getData()
    
  },[offset])

  //const cardChecked = cart.filter(obj => obj.checked === true)
  // console.log(cardChecked);
  // console.log(cart);
  let priceProducts = cart.map(c => c.totalPrice);

  let total = priceProducts.reduce((a, b) => a + b, 0);

    const totalOrder = {
      "client": name ,
      "note": note,
      "products": cart,
      "total": total,
    }

    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      setOffset(selectedPage + 1)
  };


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
          <ProductItem products={products.filter(productType => productType.type.toUpperCase() === typeProduct.toUpperCase())} selectedProduct={selectedProduct} total ={total} />

          <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
              pageCount={3}
            />

            <section className="bottomOrderWrap">
            <button className="nextPage" onClick={()=> history.push('/orders', totalOrder )}> Siguiente</button>
          </section>


        </div>
        
    );
}
  
export default TableOrder;
