import React from 'react';

import LifePointForm from './LifePointForm';
import UserLifePoints from './UserLifePoints';
import { withAuthorization } from '../Session';

const HomePage = () => (
  <div className="container m-2">
    <UserLifePoints />
    <LifePointForm />
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);