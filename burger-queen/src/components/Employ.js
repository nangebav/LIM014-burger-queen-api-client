import pen from '../images/pen.svg';
import deleteUser from '../images/X.svg';
import '../style/main.scss'

function Employ(props){

    return (
        <main>
        <section className="CardEmploy" key={props._id}>
            <img src={props.photoEmploy} className="img" alt="persona random" />
            <section >
                <h3>{props.email}</h3>
                <p>Cargo: Servicio</p>
                <p>Id: {props._id}</p>
            </section>
            <section className="editAndDelete">
                <img src={pen} alt="Editar" ></img>
                <img src={deleteUser} alt="Eliminar"></img>
            </section>
        </section>
        </main>
    )

}

export default Employ;