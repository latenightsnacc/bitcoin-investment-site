import React from 'react';
import './App.css';
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
        <Route path="/HowToInvest" component={HowToInvest} />
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
        <Route path="/UserDashboard" component={UserDashboard} />
        <Route path="/AdminDashboard" component={AdminDashboard} />
        <Route path="/NoInvestment" component={NoInvestment} />
      </Switch>
      <div className="App"></div> 
    </> 
  );
}

export default App;
