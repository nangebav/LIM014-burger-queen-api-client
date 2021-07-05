
import '../style/main.scss'
import clock from '../images/clock.svg'
import alertIcon from '../images/alertIcon.svg'

function OrderToKitchenUnitary(props) {
    return (
        <section className="orderToKitchen">
            <header>
                <div className="tableNumber">{props.client}</div>
                <div>
                    <article className="timeWraper">
                        <p>Hora de Pedido</p>
                        <div className="alertWrap">
                            <img alt="alert" className="alertIcon" src={alertIcon}></img>
                            <button className="alertTime"><img alt="clock" src={clock} ></img> {props.dateEntry}</button>
                        </div>
                    </article>
                </div>
            </header>
            <div className="productsOrdered">
                {props.products}
            </div>
            <div className="bottomOrderSection">
                <button className="deliver">{props.status}</button>
            </div>
        </section>
    );
}
  
export default OrderToKitchenUnitary;

