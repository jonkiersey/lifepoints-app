import React from 'react';

import LifePointForm from './LifePointForm';
import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    <LifePointForm />
  </div>
);

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);