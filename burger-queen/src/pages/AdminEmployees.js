import logoBurgerQueen from '../images/BQ-logo.svg';
import '../style/main.scss'
// import employA from '../images/prueba/employA.png'
import Employees from '../components/EmployesCard'
import { getUsers} from '../Services/users';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 
import {postUser} from '../Services/users'



function AdminEmployees(){

    const history =  useHistory();

    const [ createUser, setCreateUser] = useState('')
    const [newUser, setNewUser] = useState(false);

    const [employees, setEmployees] = useState([]);
    // const [admin, setAdmin] = useState(true)
    const fxNexUser = () => newUser ? setNewUser(false) : setNewUser(true);
    
    const handleInputChange = (event) => {
        setCreateUser({
            ...createUser,
            [event.target.name] : event.target.value
        })
      }

    const objEmployee = {
        email: createUser.email,
        password:createUser.password,
        roles:{
            admin: createUser.cargo === "admin" ? true : false,
        }
    }

    const fxpostUser = async () =>{
        await postUser(objEmployee)
        fxNexUser()
        history.go(0)

    }


    useEffect(()=> { 
        const getData = async () =>{
            let res = await getUsers()
            const data = res.data.filter(userType => !userType.roles.admin)
            setEmployees(data);
        }
        getData()
    },[]); 


    return(
    <section className="CardEmployees">
        <img src={ logoBurgerQueen } className="logoBQ" alt="logo"></img>
        <section>
            <h1 className="name"> Administración </h1>
            <p className="addCard" onClick={() => fxNexUser()}> + Agregar Empleado</p>
        </section>
            <section className="userWrapper" hidden= {newUser ? false : true}>
                    <h3>Email: <input 
                    type="email"
                    name="email"
                    onChange={handleInputChange}/></h3>
                    <p>Password: <input 
                    name="password"
                    type="text"
                    onChange={handleInputChange}/></p>
                    <p> Cargo: 
                    <select name="cargo" defaultValue="servicio" onChange={handleInputChange}>
                        <option value="admin">Administrador</option>
                        <option value="servicio">Servicio</option>
                    </select>
                  </p>
                    <button onClick={()=>{fxpostUser()}}> Crear Usuario</button>
                    <button  onClick={() => fxNexUser()} > Cancelar </button>
            </section>
            <Employees employees={employees}/>
    </section>
)
};

export default AdminEmployees;
