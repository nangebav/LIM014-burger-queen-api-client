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
import onionRings from '../images/products/onionRings.png'

function ProductsListSupply() {

    return (
        <>
            <header className="productSupplyHeader"> 
                <p>Lista de Productos</p>
                <p>Inventario Inicial</p>
                <p>Inventario Actual</p>
            </header>
            
            <section className="productsListSupply">
                <ProductSupply productName="Hamburguesa Simple" productItemImg={simpleHamburger} />
                <ProductSupply productName="Hamburguesa Doble" productItemImg={doubleHamburger}/>
                <ProductSupply productName="Sandwich de jamón y queso" productItemImg={sandwich}/>
                <ProductSupply productName="Papas fritas" productItemImg={fries}/>
                <ProductSupply productName="Aros de cebolla" productItemImg={onionRings}/>
                <ProductSupply productName="Café americano" productItemImg={coffee}/>
                <ProductSupply productName="Café con leche" productItemImg={latte}/>
                <ProductSupply productName="Jugo de frutas" productItemImg={juice}/>
                <ProductSupply productName="Gaseosa de 500ml" productItemImg={soda}/>
                <ProductSupply productName="Gaseosa de 750ml" productItemImg={soda}/>
                <ProductSupply productName="Agua de 500ml" productItemImg={water}/>
                <ProductSupply productName="Agua de 750ml" productItemImg={water}/>
            </section>
        </>
    )}

export default ProductsListSupply;