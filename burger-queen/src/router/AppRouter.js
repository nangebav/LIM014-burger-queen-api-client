import React from 'react';
import {BrowserRouter as Router, Route, Switch ,useHistory} from 'react-router-dom';
import LogIn from '../pages/LogIn';
import Home from '../pages/Home';
import Error from '../components/Error';
import TableOrder from '../pages/TableOrder';
import Orders from '../pages/Orders';
import OrderStatus from '../pages/OrderStatus';
import AdminEmployees from '../pages/AdminEmployees'
import Kitchen from '../pages/Kitchen'
import ProductsListSupply from '../pages/ProductsListSupply'
import Navbar from '../components/Navbar';
import jwt_decode from "jwt-decode";
import { render } from 'react-dom/cjs/react-dom.development';

function AppRouter() {
  const history = useHistory();
  // let errRoute = <Error message1 ="No tienes permiso de ver este contenido" message2 = "Inténtelo otra vez." />
  const token = localStorage.getItem('token')
  const decoded = (jwt_decode(token).roles.admin);
    if ( localStorage.token=== "") {

    //No estoy segura de esta función
      return (
        <Router>
          <Switch>
            <Route exact path="/">
              <LogIn/> 
            </Route>
            <Route path="*">
              <Error messageTitle="MENSAJE" message1 ="Email o contraseña no es inválidos." message2 = "Inténtelo otra vez." button="ACEPTAR"/>
            </Route>
          </Switch>
        </Router>
      );
    } //

    return (
      <Router>
       < Navbar />
        <Switch>
          <Route  path='/home' component={Home} />
          <Route path="/tableOrder" component={TableOrder}></Route>
          <Route path="/tableSummary">
            <h1>TableSummary</h1>
          </Route>
          <Route path="/users" render={() => decoded ? <AdminEmployees/> : <Error message1 ="no tienes permisos"/>}  />
          <Route path="/orders" component={Orders} />
          <Route path="/OrdersStatus" component={OrderStatus} />
          <Route path="/kitchen" component={Kitchen} />
          <Route  path="/products" component={ProductsListSupply} />
          <Route exact path="/">
            <LogIn/> 
          </Route>
          <Route path="*">
            <Error message1 ="Email o contraseña no es inválidos." message2 = "Inténtelo otra vez." />
          </Route>
        </Switch>
      </Router>
    );
}
 
export default AppRouter;