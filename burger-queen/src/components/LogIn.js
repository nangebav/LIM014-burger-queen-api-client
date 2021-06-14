import logoBurgerQueen from '../images/BQ-logo.svg';
import comboBQ from '../images/burger-combo.png';
import '../style/main.scss'

function LogIn() {
    return (
      <div className="logIn">
        <header className="logIn-header">
        <img src={logoBurgerQueen} className="bQ-logIn" alt="logo" />
          <form className="logIn-form">
            <p>Correo:</p>
            <input type="text" className="inputLogIn"/>
            <p>Contraseña:</p>
            <input type="text" className="inputLogIn"/>
            <button className="logIn-button"> INGRESAR </button>
          </form>
        </header>
        <img src={comboBQ} className="bQ-combo" alt="logo" />
      </div>
    );
  }
  
export default LogIn;
  