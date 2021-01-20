import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
  <Route>
    <Route path="/" exact render={()=><MainPage/>}/>
  </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
