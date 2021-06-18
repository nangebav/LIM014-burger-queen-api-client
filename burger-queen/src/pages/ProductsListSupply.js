// import logo from '../images/burger-queen-logo.png';
import '../style/main.scss'
import ProductSupply from '../components/ProductSupply'
import simpleHamburger from '../images/simpleBurger.svg'
import doubleHamburger from '../images/doubleBurger.svg'
import coffee from '../images/products/coffee.png'
import latte from '../images/products/latte.png'
import sandwich from '../images/products/sandwich.png'
import juice from '../images/products/juice.png'
import fries from '../images/products/fries.png'
import water from '../images/products/water.png'
import soda from '../images/products/soda.png'


function ProductsListSupply() {
    return (
        <fragment>
            <header className="productSupplyHeader"> 
                <p>Lista de Productos</p>
                <p>Inventario Inicial</p>
                <p>Inventario Actual</p>
            </header>
            
            <section className="productsListSupply">
                <ProductSupply productName="Hamburguesa Simple" productItemImg={simpleHamburger} initialSupply="10" actualSupply="8"/>
                <ProductSupply productName="Hamburguesa Doble" productItemImg={doubleHamburger} initialSupply="10" actualSupply="8"/>
                <ProductSupply productName="Sandwich de jamón y queso" productItemImg={sandwich} initialSupply="10" actualSupply="8"/>
                <ProductSupply productName="Papas fritas" productItemImg={fries} initialSupply="10" actualSupply="8"/>
                <ProductSupply productName="Café americano" productItemImg={coffee} initialSupply="10" actualSupply="8"/>
                <ProductSupply productName="Café con leche" productItemImg={latte} initialSupply="10" actualSupply="8"/>
                <ProductSupply productName="Jugo de frutas" productItemImg={juice} initialSupply="10" actualSupply="8"/>
                <ProductSupply productName="Gaseosa de 500ml" productItemImg={soda} initialSupply="10" actualSupply="8"/>
                <ProductSupply productName="Gaseosa de 750ml" productItemImg={soda} initialSupply="10" actualSupply="8"/>
                <ProductSupply productName="Agua de 500ml" productItemImg={water} initialSupply="10" actualSupply="8"/>
                <ProductSupply productName="Agua de 750ml" productItemImg={water} initialSupply="10" actualSupply="8"/>
            </section>
        </fragment>
    )}

export default ProductsListSupply;