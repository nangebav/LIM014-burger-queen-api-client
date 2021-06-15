import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LogIn from '../pages/LogIn.js';
import Home from '../pages/Home.js';
import Error from '../components/Error.js';

function AppRouter() {
    return (
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/tableOrder">
            <h1>TableOrder</h1>
          </Route>
          <Route path="/tableSummary">
            <h1>TableSummary</h1>
          </Route>
          <Route path="/orders">
            <h1>Orders</h1>
          </Route>
          <Route path="/kitchen">
            <h1>Kitchen</h1>
          </Route>
          <Route exact path="/">
            <LogIn/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>
    );
}
 
export default AppRouter;