
import '../style/main.scss';
import clock from '../images/clock.svg';
import alertIcon from '../images/alertIcon.svg';
import { putOrders } from '../Services/orders'
import { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';

function OrderToKitchenUnitary(props) {
    const  history = useHistory();
    const status = props.status;

    const statusChange = async (id) =>{
          await putOrders({ "status": 'delivering'}, id)
          history.go(0)
    }

    // useEffect(() =>  {
    //    window.location.reload();
    // }, [statusOrder])

    return (
        <section className="orderToKitchen">
            <header>
                <div className="tableNumber">{props.client}</div>
                <div>
                    <article className="timeWraper">
                        <p>Hora de Pedido</p>
                        <div className="alertWrap">
                            <img alt="alert" className="alertIcon" src={alertIcon}></img>
                            <button className="Time"><img alt="clock" src={clock} ></img> {props.dateEntry}</button>
                        </div>
                    </article>
                </div>
            </header>
            <div className="productsOrdered">
                {props.products}
            </div>
            <div className="bottomOrderSection">
                <button 
                onClick={() =>{
                 statusChange(props._id)}}
                className="deliver">{status}</button>
            </div>
            
        </section>
    );
}
  
export default OrderToKitchenUnitary;

