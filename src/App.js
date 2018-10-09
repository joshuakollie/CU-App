import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Welcome from './components/Welcome';
import Register from './components/Register';
import SignIn from './components/SignIn';
import PaymentProcess from './components/PaymentProcess';


class App extends Component{
  render() {
    return(
      <div>
    <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route path='/Register' component={Register}/>
      <Route path='/SignIn' component={SignIn}/>
      <Route path='/PaymentProcess' component={PaymentProcess}/>
    </Switch>
  </div>

    )}
  }


export default App;
