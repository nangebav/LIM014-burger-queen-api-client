import logoBurgerQueen from '../images/BQ-logo.svg';
import '../style/main.scss'
// import employA from '../images/prueba/employA.png'
import Employees from '../components/EmployesCard'
import { getUsers} from '../Services/users';
import { useState, useEffect } from 'react';



function AdminEmployees(){

    const [employees, setEmployees] = useState([]);
    // const [admin, setAdmin] = useState(true);

    useEffect(()=> {
        getUsers()
        .then((res)=> {
            const data = res.data.filter(userType => !userType.roles.admin )
            console.log(data);
           setEmployees(data);
        })
        .catch((err)=>{console.log(err)});


    getUsers()
    },[]);


    return(
    <section className="CardEmployees">
        <img src={ logoBurgerQueen } className="logoBQ" alt="logo"></img>
        <section>
            <h1 className="name"> Administración </h1>
            <p className="addCard"> + Agregar Empleado</p>
        </section>
            <Employees employees={employees}/>
    </section>
)
};

export default AdminEmployees;
