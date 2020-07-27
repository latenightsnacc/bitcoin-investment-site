import React from 'react';
import './App.css';
import UserDashboard from './pages/UserDashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Invest from './pages/Invest'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/invest" component={Invest} />
          <Route component={Error}/>
        </Switch>
        <UserDashboard />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
