
import '../style/main.scss'
import clock from '../images/clock.svg'
import alertIcon from '../images/alertIcon.svg'

function OrderToKitchen(props) {
    return (
        <section className="orderToKitchen">
            <header>
                <div className="tableNumber">{props.table}</div>
                <div>
                    <article className="timeWraper">
                        <p>Hora de Pedido</p>
                        <div className="alertWrap">
                            <img alt="alert" className="alertIcon" src={alertIcon}></img>
                            <button className="alertTime"><img alt="clock" src={clock} ></img></button>
                        </div>
                    </article>
                </div>
            </header>
            <div className="productsOrdered">
                2 Hamburguesas dobles d/ Pollo <br></br>
                3 Papas Fritas <br></br>
                2 Bebida/gaseosa 500ml <br></br>
            </div>
            <div className="bottomOrderSection">
                <textarea rows="5">Notas:</textarea>
                <button className="deliver">ENTREGAR</button>
            </div>
        </section>
    );
}
  
export default OrderToKitchen;

