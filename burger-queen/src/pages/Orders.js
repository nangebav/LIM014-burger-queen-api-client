import logo from '../images/burger-queen-logo.png';
import '../style/main.scss'

import OrderList from '../components/OrderList'
function Order() {
    return (
    <section className="Orden">
        <header className="ordersHeader">
            <section className="orderFlex">
                <section>
                <h2> Carta </h2>
                </section>
                <img src={logo} alt="logo"></img>
            </section>
            <section className="orderFlex">
                <h2>La Orden</h2>
                <button> Agregar + </button>
            </section>
            <section className="orderList">
                <table>
                    <thead>
                        <tr>
                            <th align="left" >Mesa</th>
                            <th align="left" >Cantidad</th>
                            <th align="left" >Total del producto</th>
                        </tr>
                    </thead>
                    <OrderList
                    order="1"
                    food="Hamburguesa Doble"
                    typeFoods="Pollo"
                    quantity="1"
                    price="10.0"/>
                    <OrderList 
                    order="2"
                    food="Papas fritas"
                    typeFoods=""
                    quantity="2"
                    price="15.0"
                    />
                    <tbody>
                        <tr>
                            <td>Total</td>
                            <td>{}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="orderFlex" >
                <h3> 
                Notas del Cliente
                </h3>
                <p></p>
            </section>
            <section className="orderFlex" >
            <button className="buttonOrder"> Enviar Pedido  </button>
            <button className="buttonOrder"> Anular pedido </button>
            </section>
        </header>
    </section>
    )}

export default Order;