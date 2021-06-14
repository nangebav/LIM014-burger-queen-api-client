import React from 'react';
import bigHamburger from '../images/bigHamburger.png';
import burgerQueenLogo from '../images/burger-queen-logo.png';
import '../style/main.scss'

function Home (){
      return(
      <section className="home">
        <main className="main-home">
          <img src={burgerQueenLogo} id="bq-home" alt="burgerQueenLogo" />
          <img src={bigHamburger} id="hamburguer-home" alt="hamburger" />
          <article>
						<button id="buttonOrdersHome">PEDIDOS</button>
					<button id="buttonKitchenHome">COCINA</button>
					</article>
        </main>
      </section>
  )
};
  
export default Home;
  