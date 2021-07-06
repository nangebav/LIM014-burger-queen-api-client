
import '../style/main.scss'
import OrderToKitchenUnitary from './OrderToKitchenUnitary';
import {getProductId} from '../Services/products'

function OrdersListKitchen(props) {

  const orders = props.orders;
   // getProductId()
  const getProductName = (id) =>{
    getProductId(id, localStorage.token)
    .then((res)=> console.log(res))
  }

     return (
      <>
      { orders.map((order) => 
  
        < OrderToKitchenUnitary 
          client={order.client} 
          dateEntry={order.dateEntry} 
          status={order.status} 
          key={order._id}
          products={order.products.map((item) => 
            //console.log(item)
            <p key={order._id + item._id}> {item.qty}  {item.product.name}</p>
          )}
        
        />
    
      )} </>
    );
}
  
export default OrdersListKitchen;
