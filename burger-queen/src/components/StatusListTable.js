import deleteOrder from '../images/X.svg'
import editOrder from '../images/pen.svg'
import {deleteOrders} from '../Services/orders'

function StatusListTable(props) {

const deletePostFx = (name) => {
    deleteOrders(localStorage.token, name)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}
    // console.log(props.orderId);


    return (
        <section className="tableCard" >
            <section className="tableStatus">
                <section className="number">
                    <label ></label>
                </section>
                <p> {props.client} </p>
            </section>
            <section className="statusWrapper">
                <section className={props.status === 'delivering' ? 'statusOk' :'statusAlert'}>
                    <h1> {props.status} </h1>
                </section>
                
                <button><img alt="btn" src={editOrder}></img></button>
                <button><img name={props.orderId} onClick={e => deletePostFx(e.target.name)} alt="btn" src={deleteOrder}></img></button>
            </section>
        </section>
    );
}
  
export default StatusListTable;
