import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () =>(
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/add" activeClassName="is-active">Go add</NavLink>
      <NavLink to="/edit" activeClassName="is-active"> Go edit</NavLink>
      <NavLink to="/help" activeClassName="is-active"> Go help</NavLink>
    </header>
  );

  export default Header;