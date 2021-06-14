import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LogIn from '../pages/LogIn.js';
import Home from '../pages/Home.js';
// import ErrorLogIn from './components/ErrorLogIn';

const AppRouter = () => {

    const toHome = Home;
    const toLogIn = LogIn;
    return (  
      <Router>
        <Switch>
          <Route path="/">
           {toLogIn}
          </Route>
          <Route path="/Home">
            {toHome}
          </Route>
          <Route path="/TableOrder">
            <h1>TableOrder</h1>
          </Route>
        </Switch>
      </Router>
    );
}
 
export default AppRouter;