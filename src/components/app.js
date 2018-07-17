import React, { Component } from 'react';
import HeaderBar from './header-bar';
import FooterBar from './footer-bar';
import './app.css';

class App extends Component {
  render() {

    return (
            <div className="App">
              <HeaderBar />
              <FooterBar />
            </div>

    );
  }
}

export default App;