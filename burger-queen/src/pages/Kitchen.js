import { useEffect, useState } from 'react';
import OrdersListKitchen from '../components/kitchen/OrdersListKitchen';
import { getOrders } from '../Services/orders';


function Kitchen() {

  const [orders, setOrders] = useState([]);

    useEffect(()=> {
      let componentMounted = true;
      const getData = async () =>{
        let response = await getOrders()
        const data = response.data.filter(orderStatus => orderStatus.status === "pending")
        if(componentMounted) {
        setOrders(data)}
      }
      getData()
      return () => {
        componentMounted = false;
       }
    },[orders])
  
    return (
      <div className="tableOrder">
        <OrdersListKitchen orders={orders}/>
      </div>
    );
  }
  
export default Kitchen;

