import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LogIn from '../pages/LogIn';
import Home from '../pages/Home';
import Error from '../components/Error';
import TableOrder from '../pages/TableOrder';
import Orders from '../pages/Orders';
import OrderStatus from '../pages/OrderStatus';
import Kitchen from '../pages/Kitchen'

function AppRouter() {
    return (
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/tableOrder">
            <TableOrder/>
          </Route>
          <Route path="/tableSummary">
            <h1>TableSummary</h1>
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
          <Route path="/OrdersStatus">
            <OrderStatus/>
          </Route>
          <Route path="/kitchen">
            <Kitchen/>
          </Route>
          <Route exact path="/">
            <LogIn/>
          </Route>
          <Route path="*">
            <Error messageTitle="MENSAJE" message1 ="Cuenta de usuario no es válida." message2 = "Inténtelo otra vez." button="ACEPTAR"/>
          </Route>
        </Switch>
      </Router>
    );
}
 
export default AppRouter;