import {Link} from 'react-router-dom';
import MenuOrderProducts from '../components/MenuOrderProducts';
import ProductItem from '../components/productItem';
import logo from '../images/burger-queen-logo.png';
import simpleHamburger from '../images/simpleBurger.svg'
import doubleHamburger from '../images/doubleBurger.svg'
import coffee from '../images/products/coffee.png'
import latte from '../images/products/latte.png'
import sandwich from '../images/products/sandwich.png'
import juice from '../images/products/juice.png'
import fries from '../images/products/fries.png'
import water from '../images/products/water.png'
import water2 from '../images/products/water.png'
import soda from '../images/products/soda.png'
import soda2 from '../images/products/soda.png'
import onionRings from '../images/products/onionRings.png'

function TableOrder() {
    return (
      <div className="tableOrder">
        <header className="tableOrderHeader">
          <nav> 
            <select className="selectTable">
              <option> MESA #1 </option>
              <option> MESA #2 </option>
              <option> MESA #3 </option>
              <option> MESA #4 </option>
              <option> MESA #5 </option>
              <option> MESA #6 </option>
              <option> MESA #7 </option>
            </select>
          </nav>
          <img src={logo} alt="logo"></img>
        </header>
        <MenuOrderProducts/>
        <h2>Elige el tipo de producto</h2>
          <ProductItem productItemImg={simpleHamburger} inputID={simpleHamburger} price="10" productName="Hamburguesa Simple"/>
          <ProductItem productItemImg={doubleHamburger} inputID={doubleHamburger} price="15" productName="Hamburguesa Doble"/>
          <ProductItem productName="Sandwich de jamón y queso" productItemImg={sandwich} inputID={sandwich} price="10"/>
          <ProductItem productName="Papas fritas" productItemImg={fries} inputID={fries} price="5"/>
          <ProductItem productName="Aros de Cebolla" productItemImg={onionRings} inputID={onionRings} price="5"/>
          <ProductItem productName="Café americano" productItemImg={coffee} inputID={coffee} price="5"/>
          <ProductItem productName="Café con leche" productItemImg={latte} inputID={latte} price="7"/>
          <ProductItem productName="Jugo de frutas" productItemImg={juice} inputID={juice} price="7"/>
          <ProductItem productName="Gaseosa de 500ml" productItemImg={soda} inputID={soda} price="10"/>
          <ProductItem productName="Agua de 500ml" productItemImg={water} inputID={water} price="10"/>
        <section className="bottomOrderWrap">
          <textarea rows="5" placeholder=" Notas"></textarea>
          <Link to="/orders"><button className="next">Siguiente</button></Link>
        </section>

      </div>
    );
  }
  
export default TableOrder;
