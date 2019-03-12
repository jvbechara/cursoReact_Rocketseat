import React, { Component } from 'react';
import Header from './Components/Header';
//import api from './services/api';
import './styles.css';
import Main from "./pages/main";
import Routes from "./routes";

const App = () => (
  <div className="App">
    <Header />
    <Routes />
 </div>
);

export default App;
