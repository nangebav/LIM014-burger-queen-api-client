import pen from '../images/pen.svg';
import deleteUser from '../images/X.svg';

// PENDIENTE FUNCIONALIDAD

function Employees (props) {
    return (
        <main>
        <section className="CardEmploy">
            <img src={props.photoEmploy} className="img" alt="persona random" />
            <section >
                <h2>{props.nameEmploy}</h2>
                <p>Cargo: {props.job}</p>
                <p>Id: {props.idEmploy}</p>
            </section>
            <section className="editAndDelete">
                <img src={pen} alt="Editar" ></img>
                <img src={deleteUser} alt="Eliminar"></img>
            </section>
        </section>
        </main>
    );
}
  
export default Employees;