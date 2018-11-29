import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Connection} from './Pages';
import RouterRoute from './Routers/Routers.js';
class App extends Component {
  render() {
    return (
      <Router>
          <RouterRoute />
        </Router>  
    );
  }
}

export default App;
