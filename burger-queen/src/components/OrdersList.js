
import '../style/main.scss'
import OrderToKitchenUnitary from './OrderToKitchenUnitary';

function OrdersList(props) {

  const orders = props.orders;

  const orderList = orders.map((order) => 
  
    <OrderToKitchenUnitary client={order.client} dateEntry={order.dateEntry} products={order.products} status={order.status}/>

  );
    return (
      <>{orderList}</>
    );
}
  
export default OrdersList;
