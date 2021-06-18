import React from 'react';
import bigHamburger from '../images/bigHamburger.png';
import burgerQueenLogo from '../images/burger-queen-logo.png';
import '../style/main.scss'
import orders from '../images/hamburger.svg'
import kitchen from '../images/chef.svg'
import admin from '../images/user.svg'

function Home(){
      return(
      <section className="home">
        <main className="main-home">
          <img src={burgerQueenLogo} id="bq-home" alt="burgerQueenLogo" />
          <img src={bigHamburger} id="hamburguer-home" alt="hamburger" />
          <article className="buttons">
						<button><img alt="orders" src={orders}></img>PEDIDOS</button>
					  <button><img alt="kitchen" src={kitchen}></img>COCINA</button>
            <button><img alt="admin" src={admin}></img>ADMIN</button>
					</article>
        </main>
      </section>
  )
};
  
export default Home;
  