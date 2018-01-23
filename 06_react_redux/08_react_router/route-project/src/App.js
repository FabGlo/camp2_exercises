import React from 'react'
import Home from "./Home";
import Chat from "./Chat";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const RouterManagement = () => (
  <Router>
    <div>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/chat" component={Chat}/>
    </div>
  </Router>
)
export default RouterManagement
