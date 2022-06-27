import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './component/auth/Login';
import Registration from './component/auth/Registration';
import Home from './component/home'
import ViewItems from './component/customer/ViewItems';
import './App.css';
export default function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Login/>
                </Route>
                <Route exact path='/registration'>
                    <Registration/>
                </Route>
                <Route exact path='/home'>
                    <Home/>
                </Route>
                <Route exact path='/items/'>
                    <ViewItems/>
                </Route>
            </Switch>
        </Router>
    </div>
  )
}
