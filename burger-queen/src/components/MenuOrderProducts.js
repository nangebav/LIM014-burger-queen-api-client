import {BrowserRouter as Router, Route, Switch, Link, useRouteMatch} from 'react-router-dom';
import '../style/main.scss'
import sandwich from '../images/sandwichMenu.svg';
import hamburger from '../images/ordersButtonHome.svg';
import aside from '../images/AcompañantesMenu.svg';
import drinks from '../images/bebidas.svg';
import ProductItem from '../components/productItem';
import simpleHamburger from '../images/simpleBurger.svg'
import doubleHamburger from '../images/doubleBurger.svg'

function MenuOrderProducts() {

  let { path, url } = useRouteMatch();

    return (
      <>
        <nav className="menu">
          <Link to={`${url}/sandwich`}><button><img className="menuImg" alt="sandwich" src={sandwich}></img></button>
          </Link>
          <Link to={`${url}/hamburger`}><button><img className="menuImg" alt="hbmn" src={hamburger}></img></button>
          </Link>
          <Link to={`${url}/asides`}><button><img className="menuImg" alt="aside" src={aside}></img></button>
          </Link>
          <Link to={`${url}/drinks`}><button><img className="menuImg" alt="drinks" src={drinks}></img></button>
          </Link>
        </nav>
      </>
    );
}
  
export default MenuOrderProducts;
