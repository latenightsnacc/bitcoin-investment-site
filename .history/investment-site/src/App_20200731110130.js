import React from 'react';
import ReactDOM from 'react-dom'
import './App.scss';
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import HowToInvest from './pages/HowToInvest'
import InvestmentPackages from './components/InvestmentPackages'
import NoInvestment from './components/NoInvestment'
import {Switch, Route} from 'react-router-dom'

function App() {

  // const handleSubmit = () => {
  //   ReactDOM.render(
  //     <UserDashboard />,document.getElementById('root')
  //   )
  // }
  return (
    <>
      <Switch>
        <Route path="/HowToInvest" exact component={HowToInvest} />
        <Route path="/" exact component={Login} />
        <Route path="/InvestmentPackages"  exact component={InvestmentPackages} />
        <Route path="/Register" exact component={Register} />
        <Route path="/Login" exact component={Login} />
        <Route path="/UserDashboard" exact component={UserDashboard} />
        <Route path="/AdminDashboard" exact component={AdminDashboard} />
        <Route path="/NoInvestment" exact component={NoInvestment} />
      </Switch> 
    </> 
  );
}

export default App;
