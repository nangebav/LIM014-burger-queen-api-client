import pen from '../images/pen.svg';
import deleteUser from '../images/X.svg';

// PENDIENTE FUNCIONALIDAD

function Employees (props) {
    const employees = props.employees;
    const employCard = employees.map((employees) => 
        <main>
        <section className="CardEmploy">
            <img src={employees.photoEmploy} className="img" alt="persona random" />
            <section >
                <h2>{employees.name}</h2>
                <p>Email: {employees.email}</p>
                <p>Cargo: Servicio</p>
                <p>Id: {employees._id}</p>
            </section>
            <section className="editAndDelete">
                <img src={pen} alt="Editar" ></img>
                <img src={deleteUser} alt="Eliminar"></img>
            </section>
        </section>
        </main>
    )
    return (
        <>{employCard}</>
    );
}
  
export default Employees;