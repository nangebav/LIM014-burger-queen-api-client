import { useEffect, useState } from 'react';
import OrdersListKitchen from '../components/OrdersListKitchen';
import { getOrders } from '../Services/orders';
// import logo from '../images/burger-queen-logo.png';

function Kitchen() {

  const [orders, setOrders] = useState([]);


    useEffect(()=> {
      
      const getData = async () =>{
        let response = await getOrders(localStorage.token)

        setOrders(response.data)
      }
      getData()
      
    },[])
  
    return (
      <div className="tableOrder">
        <OrdersListKitchen orders={orders}/>
      </div>
    );
  }
  
export default Kitchen;

