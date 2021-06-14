import logoBurgerQueen from '../images/burger-combo.png';
import comboBQ from '../images/burger-combo.png';

function LogIn() {
    return (
      <div className="logIn">
        <header className="App-header">
          <img src={logoBurgerQueen} className="App-logo" alt="logo" />
          <p>Correo:</p>
          <input type="text"/>
          <p>Contraseña:</p>
          <input type="text"/>
          <img src={comboBQ} alt="combo Buer"/>
        </header>
      </div>
    );
}
  
export default LogIn;
  