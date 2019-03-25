import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>
        <Quote
          dest = 'Paris'
          count = 'France'
          pho = 'https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_960_720.jpg'
          dist = '5'
        />
        <Quote
        dest = 'lille'
        count = 'France'
        pho = 'http://www.myurbanr.com/wp-content/uploads/2018/04/2215_lille-20180426.jpg'
        dist = '20'
        />
      </div>
    );
  }
}

export default App;
