import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage';
import ExpensifyDashboardPage from '../components/ExpensifyDashboard';
import HelpExpensePage from '../components/HelpExpesePage';
import PageNotFound from '../components/PageNotFound';
import Header from '../components/Header';
  const AppRouter = () => (
  <BrowserRouter>
  <div>
  <Header/>
  <Switch>
  <Route path="/" component={ExpensifyDashboardPage} exact={true}/>
  <Route path="/add" component={AddExpensePage}/>
  <Route path="/edit/:id" component={EditExpensePage}/>
  <Route path="/help" component={HelpExpensePage}/>
  <Route component={PageNotFound}/>
  </Switch>
  </div>
  </BrowserRouter>
  );

  export default AppRouter;