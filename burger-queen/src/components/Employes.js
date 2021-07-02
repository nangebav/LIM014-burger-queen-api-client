import pen from '../images/pen.svg';
import deleteUser from '../images/X.svg';
import '../style/main.scss';
import Modal from 'react-modal';
import { useState } from 'react';

function Employ(props){

    Modal.setAppElement('#root')
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <main>
        <section className="CardEmploy" key={props._id}>
            <img src={props.photoEmploy} className="img" alt="persona random" />
            <section className="userWrapper">
                <h3>{props.email}</h3>
                <p>Cargo: Servicio</p>
                <p>Password: {props.password}</p>
            </section>
            <section className="editAndDelete">
                <img src={pen} alt="Editar" onClick={() => setModalIsOpen(true)}></img>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  className="Modal"
                  // overlayClassName="Overlay"
                >
                  <i className="far fa-window-close" onClick={() => setModalIsOpen(false)}></i>
                  <section className="productsInfo">
                    
                    <button >Guardar</button>
                  </section>
                </Modal>
                <img 
                className={props._id}
                /* onClick={e => deleteUsersFx(e.target.className)} */
                src={deleteUser}
                alt="Eliminar"></img>
            </section>
        </section>
        </main>
    )

}

export default Employ;