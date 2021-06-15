import logo from '../images/burger-queen-logo.png';
import '../style/main.scss'

import OrderList from '../components/OrderList'
function Order() {
    return (
    <section className="Orden">
        <header className="ordersHeader">
            <section className="orderFlex">
                <h2> Carta </h2>
                <img src={logo} alt="logo"></img>
            </section>
            <section className="orderFlex">
                <h2>La Orden</h2>
                <button> Agregar + </button>
            </section>
            <section className="orderFlex" >
                    <OrderList/>
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