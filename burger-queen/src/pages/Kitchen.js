
import OrderToKitchen from '../components/OrderToKitchen';
import logo from '../images/burger-queen-logo.png';

function Kitchen() {
    return (
      <div className="tableOrder">
        <header className="orderToKitchenHeader">
          <img src={logo} alt="logo"></img>
        </header>
        <OrderToKitchen table="MESA 1"/>
        <OrderToKitchen table="MESA 2"/>
        <OrderToKitchen table="MESA 3"/>
        <OrderToKitchen table="MESA 4"/>
      </div>
    );
  }
  
export default Kitchen;