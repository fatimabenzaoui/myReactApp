import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import './App.css';

import StellarApp from './routes/StellarApp';
import TodoListApp from './routes/TodoListApp';
import TwitterApp from './routes/TwitterApp';
import Bases from './routes/Bases';
import Examples from './routes/Examples';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route component={StellarApp} path="/" exact />
      <Route component={TodoListApp} path="/todolistapp" />
      <Route component={TwitterApp} path="/twitterapp" />
      <Route component={Bases} path="/bases" />
      <Route component={Examples} path="/examples" />
      <Footer />
    </Router>
  );
};

export default App;
