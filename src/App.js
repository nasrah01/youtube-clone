import './App.css';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component {

  render() {
      return (
        <div className="app">
  
        <Header />
        
        <div className="main">
          <Sidebar />
          <Videos />
        </div>
  
      </div>
      )
  }
}

export default App;
