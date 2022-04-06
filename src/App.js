import React from 'react';
// import logo from './trivia.png';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Login from './pages/Login';
import Jogo from './pages/Jogo';

export default function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/jogo" component={ Jogo } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
