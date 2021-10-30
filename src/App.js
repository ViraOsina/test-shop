import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Logo from './assets/a-logo.png';
import Vector from './assets/Vector.png'
import './App.css';

//components
import WomenCategory from './components/WomenCategory';
import MenCategory from './components/MenCategory';
import KidsCategory from './components/KidsCategory';
import CartPage from './components/CartPage';
import ProductPage from './components/ProductPage';
import DropdownCart from './components/DropdownCart';
import Currency from './components/Currency';

class App extends React.Component {
    constructor () {
      super ();
  }

  render(){
  return (
    <Router>
      <div className="navigation__bar">
        <ul className="navigation">
          <li><NavLink to="/test-shop/" exact activeClassName="active__link">Women</NavLink></li>
          <li><NavLink to="/test-shop/men" exact activeClassName="active__link">Men</NavLink></li>
          <li><NavLink to="/test-shop/kids" exact activeClassName="active__link">Kids</NavLink></li>
        </ul>
        <div className="logo">
          <img src={Logo} alt="logo"></img>
        </div>
        <div>
        <NavLink to="/test-shop/currency" exact>
          <div className="currency__converter">
            <span className="currency__badge">
              $ 
            </span>
            <div className="Vector">
              <img src={Vector} alt="vector"></img>
            </div>
          </div>
        </NavLink>
        <NavLink to="/test-shop/cart" exact>
        <div className='cart__nav'> 
            
            <i className="fas fa-shopping-cart"></i>
            <span className="cartbadge">0</span>
            
        </div>
        </NavLink>
        </div>
     </div>
      <>
        <Switch>
          <Route exact path="/">
            <Redirect to="/test-shop/" />
          </Route>
          <Route exact path="/test-shop/" component={WomenCategory} />
          <Route exact path="/test-shop/men" component={MenCategory} />
          <Route exact path="/test-shop/kids" component={KidsCategory} />
          <Route exact path="/test-shop/cart" component={DropdownCart} />
          <Route exact path="/test-shop/currency" component={Currency} />
          <Route exact path="/test-shop/product" component={ProductPage} />
        </Switch>
      </>
    </Router>
  );
  }
}

export default App;
