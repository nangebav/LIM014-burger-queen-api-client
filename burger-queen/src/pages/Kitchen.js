import { useEffect, useState } from 'react';
import OrdersListKitchen from '../components/kitchen/OrdersListKitchen';
import { getOrders } from '../Services/orders';

// import ReactPaginate from 'react-paginate';

function Kitchen() {

  const [orders, setOrders] = useState([]);

  // const [offset, setOffset] = useState(0);


    useEffect(()=> {
      let componentMounted = true;
      const getData = async () =>{
        let response = await getOrders(1, 20)
        const data = response.data.filter(orderStatus => orderStatus.status === "pending")
        if(componentMounted) {
        setOrders(data)}
      }
      getData()
      return () => {
        componentMounted = false;
       }
    },[orders])

    /*

    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      setOffset(selectedPage + 1)
  };

  */


    
  
    return (
      <div className="tableOrder">
        <OrdersListKitchen orders={orders}/>
       
      </div>
    );
  }
  
export default Kitchen;

