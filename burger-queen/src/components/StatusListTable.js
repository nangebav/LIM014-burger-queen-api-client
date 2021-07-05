import deleteOrder from '../images/X.svg'
import editOrder from '../images/pen.svg'
import {deleteOrders} from '../Services/orders'
import Modal from 'react-modal';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function StatusListTable(props) {
    
    const history = useHistory()

    const deletePostFx = (id) => {
        //console.log(id)
        deleteOrders(localStorage.token, id)
            .then(() => history.go(0))
            .catch(err => console.log(err))
    }
    
    Modal.setAppElement('#root')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [boxModalOpen, setBoxModalIsOpen] = useState(false)

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
                <button><img name={props.orderId} onClick={() => setBoxModalIsOpen(true)} alt="btn" src={deleteOrder}></img></button>
                
                <Modal isOpen={boxModalOpen}
                onRequestClose={() => setBoxModalIsOpen(false)}
                className="Modal">
                  <i className="far fa-window-close" onClick={() => setBoxModalIsOpen(false)}></i>
                  <h3> ¿Segur@ que desea eliminar la orden? </h3>
                  <p> Esta acción será irreversible</p>
                  <button onClick={()=> deletePostFx(props.orderId)}> Eliminar </button>
                  <button  onClick={() => setBoxModalIsOpen(false)} > Cancelar </button>
                </Modal>
            </section>
        </section>
    );
}
  
export default StatusListTable;
