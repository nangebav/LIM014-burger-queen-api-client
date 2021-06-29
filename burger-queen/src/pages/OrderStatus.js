import logo from '../images/burger-queen-logo.png';
import '../style/main.scss'
import StatusListTable from '../components/StatusListTable'
import { useEffect, useState } from 'react';
import { getOrders } from '../Services/orders';

function OrderStatus() {

    const [orderStatus, setOrderStatus] = useState([]);


    useEffect(()=> {
      
      const getData = () =>{
        getOrders()
        .then((res)=> {
          setOrderStatus(res.data);
        })
        .catch((err)=>{console.log(err)})
      }
      getData()
      
    },[])


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
                {  orderStatus.map((order) => 

                    <StatusListTable status={order.status} client={order.client} orderId={order._id} key={order._id}/>

                )}
            </section>
        </header>
    </section>
    )}

export default OrderStatus;