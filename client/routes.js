/**
 * ./client/routes.js
 * Manage the routes of the application frontend
 * @type {Router}
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; // using HashRouter instead of BrowserRouter because no server serving this content for now

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/plop'>Plop</Link></li>
      </ul>
    </nav>
  </header>
)

const Routes = (props) => (
  <div>
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default Routes;
