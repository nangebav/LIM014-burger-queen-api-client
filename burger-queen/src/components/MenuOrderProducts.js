import '../style/main.scss'
import sandwich from '../images/sandwichMenu.svg';
import hamburger from '../images/ordersButtonHome.svg';
import aside from '../images/AcompañantesMenu.svg';
import drinks from '../images/bebidas.svg';

function MenuOrderProducts() {
    return (
        <section className="menu">
          <button><img className="menuImg" alt="sandwich" src={sandwich}></img></button>
          <button><img className="menuImg" alt="hbmn" src={hamburger}></img></button>
          <button><img className="menuImg" alt="aside" src={aside}></img></button>
          <button><img className="menuImg" alt="drinks" src={drinks}></img></button>
        </section>
    );
}
  
export default MenuOrderProducts;
