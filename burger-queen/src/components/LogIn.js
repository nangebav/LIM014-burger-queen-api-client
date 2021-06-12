import logoBurgerQueen from '../images/burger-queen-logo.png';
import comboBQ from '../images/burger-combo.png';
import '../styles/components/LogIn.scss';

function LogIn() {
    return (
      <div className="logIn">
        <header className="logIn-header">
        <img src={logoBurgerQueen} className="App-logo" alt="logo" />
          <form className="logIn-form">
            <p>Correo:</p>
            <input type="text" className="inputLogIn"/>
            <p>Contraseña:</p>
            <input type="text" className="inputLogIn"/>
            <button className="logIn-button"> INGRESAR </button>
          </form>
          <img src={comboBQ} alt="inputLogIn"/>
        </header>
      </div>
    );
  }
  
  export default LogIn;
  