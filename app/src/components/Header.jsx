import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "./Header.Style.css";
import logo from "../logo.svg";

const Bike = ({ match }) => (
  <div>
    <h2>Bike: {match.params.id}</h2>
  </div>
);

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Router>
          <nav className="Header__navigation">
            <ul className="Header__navigation__list">
              <li className="Header__navigation__list__first">
                <ul>
                  <li>News</li>
                  <li>Vision</li>
                  <li>Racing</li>
                  <li>Something</li>
                </ul>
              </li>

              <li className="Header__navigation__list__second">
                <ul>
                  <li>Service</li>
                  <li>Find dealer</li>
                  <li>Country (CUR)</li>
                  <li>Wishlist</li>
                </ul>
              </li>

              <li className="Header__navigation__models">
                <ul>
                  <li><Link to="/mx">MX</Link></li>
                  <li><Link to="/supermoto">Supermoto</Link></li>
                  <li><Link to="/enduro">Enduro</Link></li>
                </ul>
              </li>
            </ul>
            <div className="menu__models__dropdown">
              <Route path="/:id" component={Bike} />
            </div>
          </nav>
        </Router>
        <img className="Header__logo" src={logo} alt="KTM logo" />

      </header>
    );
  }
}

export default Header;
