import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbars'
import Home from './views/Home'
import About from './views/About'

import {PrivateRoute} from './components/privateRoute'
import { Register } from './views/registers'
import { Logins } from './views/logins'

import { alertActions } from './actions';
//Redux create 
import { connect } from 'react-redux';
import {history }from './helpers'


class App extends React.Component {
  constructor(props) {
      super(props);

      history.listen((location, action) => {
          // clear alert on location change
          this.props.clearAlerts();
      });
  }

 render () { 
  return (
    <div className="App">
    <Navbar></Navbar>
        
  <section className ="content">
        <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Logins} />
        <Route path="/about" component={About} />
        <PrivateRoute exact path="/" component={Home} />
        </Switch>
  </section>
      
    </div>
  );
 }
}
function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };