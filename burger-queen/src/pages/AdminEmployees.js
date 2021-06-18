import logoBurgerQueen from '../images/BQ-logo.svg';
import '../style/main.scss'
import employA from '../images/prueba/employA.png'
import employB from '../images/prueba/employB.png'
import employC from '../images/prueba/employC.png'

import Employees from '../components/EmployesCard'
function AdminEmployees(){
    return(
    <section className="CardEmployees">
    <img src={ logoBurgerQueen } className="logoBQ" alt="logo"></img>
    <h1 className="name"> Administración </h1>
    <p className="addCard"> + Agregar Empleado</p>
    <Employees
    photoEmploy={employA}
    nameEmploy="Mariana Álvarez"
    job="meser@"
    idEmploy="728596785"/>
    <Employees
    photoEmploy={employB}
    nameEmploy="Lara Flores"
    job="cociner@"
    idEmploy="728596785"/>
    <Employees
    photoEmploy={employC}
    nameEmploy="Daniel Mora"
    job="meser@"
    idEmploy="728596785"/>
    </section>
)
};

export default AdminEmployees;
