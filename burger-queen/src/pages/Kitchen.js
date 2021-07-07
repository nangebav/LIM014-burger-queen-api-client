import { useEffect, useState } from 'react';
import OrdersListKitchen from '../components/kitchen/OrdersListKitchen';
import { getOrders } from '../Services/orders';

function Kitchen() {

  const [orders, setOrders] = useState([]);


    useEffect(()=> {
      
      const getData = async () =>{
        let response = await getOrders()
        const data = response.data.filter(orderStatus => orderStatus.status === "pending")
        setOrders(data)
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

