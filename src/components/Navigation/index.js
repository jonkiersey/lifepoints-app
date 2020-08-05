import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <h1 className="bg-dark text-light"><div className="m-2">LifePoints</div></h1>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <Link to={ROUTES.LANDING} className="nav-link">Landing</Link>
    </li>
    <li className="nav-item">
      <Link to={ROUTES.HOME} className="nav-link">Home</Link>
    </li>
    <li className="nav-item">
      <Link to={ROUTES.ACCOUNT} className="nav-link">Account</Link>
    </li>
    <li className="nav-item"> 
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <Link to={ROUTES.LANDING} className="nav-link">Landing</Link>
    </li>
    <li className="nav-item">
      <Link to={ROUTES.SIGN_IN} className="nav-link">Sign In</Link>
    </li>
  </ul>
)

export default Navigation;
