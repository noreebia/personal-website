import React, { Component } from 'react';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <header className="banner">
          <a href="/">
            <img id="banner" src="http://demo.qodeinteractive.com/central/wp-content/uploads/2013/05/header.jpg" alt="banner" href="/"></img>
          </a>
        </header>
        <nav>
          <ul id="navigation-bar">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blog/tech">Tech</a>
            </li>
            <li>
              <a href="/blog/tech">Personal</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
