import React from 'react';
import bigHamburger from '../images/bigHamburger.png';
import burgerQueenLogo from '../images/burger-queen-logo.png';
import '../style/main.scss'
import orders from '../images/hamburger.svg'
import kitchen from '../images/chef.svg'
import admin from '../images/user.svg'
import {Link} from 'react-router-dom';

function Home(){
      return(
      <section className="home">
        <main className="main-home">
          <img src={burgerQueenLogo} id="bq-home" alt="burgerQueenLogo" />
          <img src={bigHamburger} id="hamburguer-home" alt="hamburger" />
          <article className="buttons">
            <Link to="/orders">
						  <button><img alt="orders" src={orders}></img>PEDIDOS</button>
					  </Link>
            <Link to="/kitchen">
              <button><img alt="kitchen" src={kitchen}></img>COCINA</button>
            </Link>
            <Link to="/supply">
              <button><img alt="admin" src={admin}></img>ADMIN</button>
            </Link>
          </article>
        </main>
      </section>
  )
};
  
export default Home;
  