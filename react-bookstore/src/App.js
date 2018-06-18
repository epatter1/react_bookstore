import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'; 
import Content from './Content.js'; 
import Footer from './Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Content />
        <p className="App-intro">
          We have several books. Feel free to browse for as long as you like.
          Click on a cover image to see details, or click the <code> ADD TO CART </code>
          button to add a book to your shopping cart. 
        </p>

        

        <Footer />
      </div>
    );
  }
}

export default App;
