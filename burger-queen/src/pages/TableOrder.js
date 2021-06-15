import MenuOrderProducts from '../components/MenuOrderProducts';
import ProductItem from '../components/productItem';
import logo from '../images/burger-queen-logo.png';
import simpleHamburger from '../images/simpleBurger.svg'
import doubleHamburger from '../images/doubleBurger.svg'
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
        <ProductItem productItemImg={simpleHamburger} inputID={simpleHamburger}/>
        <ProductItem productItemImg={doubleHamburger} inputID={doubleHamburger}/>
        <section className="bottomOrderWrap">
          <textarea rows="5"> Notas</textarea>
          <button className="next">Siguiente</button>
        </section>

      </div>
    );
  }
  
export default TableOrder;
  