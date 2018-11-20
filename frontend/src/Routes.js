import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Poll from "./components/Poll/Poll";
import { withAlert } from 'react-alert';
import AddPoll from './components/AddPoll/AddPoll';
import AddQuestions from './components/AddPoll/AddPoll';

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={withAlert(SignUp)} />
    <Route path="/addPoll" exact component={AddPoll} />
    <Route path="/poll/:pollid" component={Poll}/>
    <Route path="/addQuestion" component={AddQuestions}/>
    <Route component={NotFound} />
  </Switch>;