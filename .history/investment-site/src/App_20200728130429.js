import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import Menu from '../src/components/Menu'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import HowToInvest from './pages/HowToInvest'
import NoInvestment from './components/NoInvestment'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Switch>
        <Route path="/HowToInvest" component={HowToInvest}>How To Invest</Route>
        <Route path="/Register" component={Register}>Register</Route>
        <Route path="/Login" component={Login}>Login</Route>
        <Route path="/UserDashboard" component={UserDashboard}> User Dashboard</Route>
        <Route path="/AdminDashboard" component={AdminDashboard}> Admin Dashboard</Route>
        <Route path="/NoInvestment" component={NoInvestment} />
      </Switch>
      <div className="App"></div> 
    </> 
  );
}

export default App;
