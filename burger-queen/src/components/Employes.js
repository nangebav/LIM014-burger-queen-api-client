import pen from '../images/pen.svg';
import deleteUser from '../images/X.svg';
import '../style/main.scss';
import {deleteUsers, putUsers} from '../Services/users'
import Modal from 'react-modal';
import { useEffect, useState } from 'react';

function Employ(props){

    const deleteUsersFx = (uid) =>{
        deleteUsers(uid)
        .then((res)=> console.log(res.data)
          )
          .catch((err)=>{console.log('No se logró la petición')})
    }

    Modal.setAppElement('#root')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [boxModalOpen, setBoxModalIsOpen] = useState(false)
    const [ editUser, setEditUser] = useState('')


    //const id = props.id

    const updateUser = (obj, uid) =>{
      
      putUsers(obj, uid)
      .then((res)=> {
        console.log('subiste tus cambios');
        return res.data
       })
       .catch((err) => {
        console.log('No logramos actualizar');
       })
    };
    

    const handleInputChange = (event) => {
      setEditUser({
          ...editUser,
          [event.target.name] : event.target.value
      })
    }
    

    // console.log(props._id);
    // console.log(props.admin);
    return (
        <section>
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
                <form className="form-modal">
                  <div className="form-container">
                    <p>Email:  <input
                      defaultValue={props.email}
                      id="input-email"
                      name="email"
                      type="email"
                      onChange={handleInputChange}
                    /></p>
                    <p>Contraseña:  <input
                      defaultValue={props.password}
                      id="input-password"
                      name="password"
                      onChange={handleInputChange}
                    /></p>
                    <p> Admin: 
                    <select id="input-admin" className="select-modal"
                      defaultValue={props.admin ? 'SI' : 'NO'}
                      name="admin"
                    >
                      <option value="NO">NO</option>
                      <option value="SI">SI</option>
                    </select>
                    </p>
                  </div>
                </form>
                <button onClick={()=> {updateUser(editUser,props._id)
                    }}>Guardar</button>
                </section>
                </Modal>
                <img 
                className={props._id}
                onClick={e => setBoxModalIsOpen(true)}
                src={deleteUser}
                alt="Eliminar"></img>
                
                <Modal isOpen={boxModalOpen}
                onRequestClose={() => setBoxModalIsOpen(false)}
                className="Modal">
                  <i className="far fa-window-close" onClick={() => setBoxModalIsOpen(false)}></i>
                  <h3> ¿Segur@ que desea eliminar al usuario? </h3>
                  <p> Esta acción será irreversible</p>
                  <button onClick={() => {deleteUsersFx(props._id)}}> Eliminar </button>
                  <button  onClick={() => setBoxModalIsOpen(false)} > Cancelar </button>
                </Modal>


            </section>
        </section>
        </section>
    )

}

export default Employ;

