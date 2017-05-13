import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import "./Header.Style.css";
import logo from "../logo.svg";

const ModelSubMenu = ({ match }) => (
  <div className="Header Model__SubMenu">
    <h2>Model: {match.params.id}</h2>
  </div>
);

class Header extends Component {
  render() {
    return (
      <header className="Header">
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

        </nav>
        <img className="Header__logo" src={logo} alt="KTM logo" />

        <Route path="/:id" component={ModelSubMenu} />

      </header>
    );
  }
}

export default Header;
