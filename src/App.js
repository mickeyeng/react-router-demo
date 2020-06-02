import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './pages/home'
import ServicesList from './pages/services/servicesList'
import ServiceDetail from './pages/services/serviceDetail'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/services">
          <ServicesList />
        </Route>
        <Route exact path="/services/:serviceId">
          <ServiceDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
