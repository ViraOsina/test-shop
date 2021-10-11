import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Logo from './assets/a-logo.png';
import Vector from './assets/Vector.png'
import './App.css';

//components
import WomenCategory from './components/WomenCategory';
import MenCategory from './components/MenCategory';
import KidsCategory from './components/KidsCategory';
import CartPage from './components/CartPage';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <Router>
      <div className="navigation__bar">
        <ul className="navigation">
          <li><NavLink to="/" exact activeClassName="active__link">Women</NavLink></li>
          <li><NavLink to="/men" exact activeClassName="active__link">Men</NavLink></li>
          <li><NavLink to="/kids" exact activeClassName="active__link">Kids</NavLink></li>
        </ul>
        <div className="logo">
          <img src={Logo} alt="logo"></img>
        </div>
        <NavLink to="/cart" exact>
        <div className='cart__nav'> 
            
            <span className="cart__badge">
              $ 
            </span>
            <div className="Vector">
              <img src={Vector} alt="vector"></img>
            </div>
            <i className="fas fa-shopping-cart"></i>
            <span className="cartbadge">0</span>
            
        </div>
        </NavLink>
     </div>
      <main className="app">
        <Switch>
          <Route exact path="/" component={WomenCategory} />
          <Route exact path="/men" component={MenCategory} />
          <Route exact path="/kids" component={KidsCategory} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/product" component={ProductPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
