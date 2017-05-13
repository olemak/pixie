import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

import "./App.Style.css";

class App extends Component {
  render() {
    return (
      <Router>          
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
