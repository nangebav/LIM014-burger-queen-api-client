
import '../style/main.scss'
import OrderToKitchenUnitary from './OrderToKitchenUnitary';

function OrdersListKitchen(props) {

  const orders = props.orders;

  const orderList = orders.map((order) => 
  
    <OrderToKitchenUnitary client={order.client} dateEntry={order.dateEntry} status={order.status} key={order._id}/>

  );
    return (
      <>{orderList}</>
    );
}
  
export default OrdersListKitchen;
