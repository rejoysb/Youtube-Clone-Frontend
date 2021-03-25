import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
function App() {
  return (
    <div className="App">

<>
<Navbar/>
</>
    <Router>
      <Switch>
  <Route>
    <Route path="/" exact render={()=><MainPage/>}/>
    <Route path="/signin" exact render={()=><SignInPage/>}/>
  </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
