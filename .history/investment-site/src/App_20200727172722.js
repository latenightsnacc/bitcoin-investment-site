import React from 'react';
import './App.css';
import UserDashboard from './pages/UserDashboard'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/how-to-invest" component={HowToInvest} />
          <Route component={Error}/>
        </Switch>
        <UserDashboard />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
