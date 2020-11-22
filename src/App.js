import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import './App.css';

import StellarApp from './routes/StellarApp';
import TodoListApp from './routes/TodoListApp';
import TwitterApp from './routes/TwitterApp';

const App = () => {
  return (
    <BrowserRouter>
      <Route component={StellarApp} path="/myReactApp/" exact />
      <Route component={TodoListApp} path="/myReactApp/todolistapp" />
      <Route component={TwitterApp} path="/myReactApp/twitterapp" />
    </BrowserRouter>
  );
};

export default App;