import React from 'react';

import LifePointForm from './LifePointForm';
import UserLifePoints from './UserLifePoints';
import { withAuthorization } from '../Session';

const HomePage = () => (
  <div className="container m-2">
    <div className="row">
      <div className="col">
        <LifePointForm />
      </div>
      <div className="col">
        <UserLifePoints />
      </div>
    </div>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);