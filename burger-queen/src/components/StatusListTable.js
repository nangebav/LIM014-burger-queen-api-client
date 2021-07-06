import deleteOrder from '../images/X.svg'
import editOrder from '../images/pen.svg'
import {deleteOrders} from '../Services/orders'
import Modal from 'react-modal';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {putOrders} from '../Services/orders';

function StatusListTable(props) {
    
    const history = useHistory()
    
    Modal.setAppElement('#root')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [boxModalOpen, setBoxModalIsOpen] = useState(false)
    const [order, setOrder] = useState()

    const deleteOrderFx = async(id) => {
        await deleteOrders(id)
        console.log('Eliminaste Orden');
        history.go(0)
    }
    
    Modal.setAppElement('#root')

    const handleInputChange = (event) => {
        setOrder({
            ...order,
            [event.target.name] : event.target.value
        })
      }
      console.log(order)

      const updateOrder = (obj, idProduct) =>{
        putOrders(obj, idProduct)
        .then(()=> {
          history.go(0)
         })
         .catch(() => console.log('no se pudieron guardar los cambios'))
        };

    
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
                
                <button><i className="fas fa-edit" onClick={()=> setModalIsOpen(true)}></i></button>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  className="Modal"
                >
                  <i className="far fa-window-close" name={props.id} onClick={
                    () => setModalIsOpen(false)}></i>
                                <table className="ordersTable">
                                    <tr>
                                        <th>Productos </th>
                                        <th>Cantidad </th>
                                    </tr>
                                    <tbody>
                                    {props.products.map((product)=>
                                            <tr key={product.name +product.product._id}>
                                                <td> {product.product.name} </td>
                                                <td><input defaultValue={product.qty} name="qty" onChange={handleInputChange }></input></td>
                                            </tr>                           
                                        )}

                                    </tbody>

                                </table>
                  <section className="ordersInfo">
                    <p>Nombre:  <input name="client" defaultValue={props.client} onChange={handleInputChange } ></input></p>
                    <button onClick={()=> updateOrder(order, props.orderId)}>Guardar</button>
                  </section>
                </Modal>


                <button><i className="fas fa-trash-alt" name={props.orderId} onClick={() => setBoxModalIsOpen(true)} alt="btn" src={deleteOrder}></i></button>
                
                <Modal isOpen={boxModalOpen}
                onRequestClose={() => setBoxModalIsOpen(false)}
                className="Modal">
                  <i className="far fa-window-close" onClick={() => setBoxModalIsOpen(false)}></i>
                  <h3> ¿Segur@ que desea eliminar la orden? </h3>
                  <p> Esta acción será irreversible</p>
                  <button className="btnDelete" onClick={()=> deleteOrderFx(props.orderId)}> Eliminar </button>
                  <button className="cancel" onClick={() => setBoxModalIsOpen(false)} > Cancelar </button>
                </Modal>
            </section>
        </section>
    );
}
  
export default StatusListTable;
