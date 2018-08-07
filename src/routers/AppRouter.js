import React from 'react';
import { Router,Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpensifyDashboardPage from '../components/ExpensifyDashboard';
import HelpExpensePage from '../components/HelpExpesePage';
import PageNotFound from '../components/PageNotFound';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
  
export const history = createHistory();
  const AppRouter = () => (
  <Router history={history}>
  <div> 
  <Switch>
  <Route path="/" component={Login} exact={true}/>
  <PrivateRoute path="/dashboard" component={ExpensifyDashboardPage}/>
  <PrivateRoute path="/add" component={AddExpensePage}/>
  <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
  <Route path="/help" component={HelpExpensePage}/>
  <Route component={PageNotFound}/>
  </Switch>
  </div>
  </Router>
  );

  export default AppRouter;