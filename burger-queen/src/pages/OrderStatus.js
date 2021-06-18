import logo from '../images/burger-queen-logo.png';
import '../style/main.scss'

import StatusListTable from '../components/StatusListTable'

function OrderStatus() {
    return (
    <section className="OrderStatus">
        <header className="orderStatusHeader">
            <img src={logo} alt="logo"></img>
            <h1>PEDIDOS</h1>
            <section className="table">
            <h2>Mesas</h2>
            <h2>Estado del pedido</h2>
            </section>
            <section>
                <StatusListTable status="ENTREGADO" numberTable="1" />
                <StatusListTable status="ENTREGADO" numberTable="2" />
                <StatusListTable status="EN COCINA" numberTable="3" />
            </section>
        </header>
    </section>
    )}

export default OrderStatus;