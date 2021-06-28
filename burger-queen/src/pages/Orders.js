import logo from '../images/burger-queen-logo.png';
import '../style/main.scss'
import {Link} from 'react-router-dom';
import OrderList from '../components/OrderList'
// import useCart from '../hooks/useCart.js';
import {useLocation} from 'react-router-dom';
import useCart from '../hooks/useCart.js';
import { useContext } from 'react';
import CartContext from '../hooks/CartContext';
import ProductItem from '../components/ProductItem';


function Order(props) {

    

    const location = useLocation(); 
    const order = location.state // traemos la orden con useState desde Table Order
    
    // console.log(order) // 

    const orderProducts = order.products
    // console.log(orderProducts);
      // objeto para post cuando tengamos el API
        // const test = {
        //   "userId": "M11",
        //   "client": order.client,
        //   "products": [
        //     {
        //       "qty": 1,
        //       "product": {
        //         "name": "hamburguesa",
        //         "id": "123"
        //       }
        //     },
        //     {
        //       "qty": 1,
        //       "product": {
        //         "name": "sprite",
        //         "id": "111"
        //       }
        //     }
        //   ],
        // }
    // función para ingresar data a API
        // const sendOrder = (test) =>{
        //   addOrders(test)
        //   .then((res)=> console.log(res.data))
        // }

    return (
    <section className="Orden">
        <header className="ordersHeader">
            <section className="orderFlex">
                <section>
                <Link to="/tableOrder">
                    <button className="goToCard"> ← Carta </button>
                </Link>
                </section>
                <img src={logo} alt="logo"></img>
            </section>
            <section className="orderFlex">
                <h2>La Orden : {order.client} </h2>
                <button> Agregar + </button>
            </section>
            <section className="orderList">
                <table>
                    <thead>
                        <tr>
                            <th align="left" >Productos</th>
                            <th align="left" >Cantidad</th>
                            <th align="left" >Total del producto</th>
                        </tr>
                    </thead>
                    {orderProducts.map((product) => 
                    <OrderList selectedProduct={props.selectedProduct} food={product.name} quantity={product.quantity} price={product.totalPrice} key={product.name}/>
                    )}
                    <tbody>
                        <tr>
                            <td>Total</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="orderFlex" >
                <h3> 
                Notas del Cliente
                </h3>
                <p> {order.note}</p>
            </section>
            <section className="orderFlex" >
            <button className="buttonOrder"> Enviar Pedido  </button>
            <button className="buttonOrder"> Anular pedido </button>
            </section>
        </header>
    </section>
    )}

export default Order;