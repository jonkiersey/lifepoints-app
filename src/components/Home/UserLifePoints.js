import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { AuthUserContext } from '../Session';
import { getUserLifePoints } from '../../redux/actions';

const getPrettyCategory = (category) => {
  const mapping = {
    PERSONAL_DEVELOPMENT: 'Personal Development',
    EXERCISE: 'Exercise',
    HOUSEHOLD: 'Household',
    SOCIAL: 'Social',
    RELATIONSHIP: 'Relationship'
  }
  return mapping[category];
}

class UserLifePoints extends React.Component {
  constructor(props) {
    super(props);
    this.handleGetUserLifePoints = this.handleGetUserLifePoints.bind(this);
  }

  componentDidUpdate = (prevProps, prevState) => {}

  handleGetUserLifePoints = (authUser) => {
    const data = { userId: authUser.uid };
    this.props.getUserLifePoints(data);
  }

  render = () => {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div className="container mt-2">
            <div className="row">
              <button onClick={() => this.handleGetUserLifePoints(authUser)} className="btn btn-primary col-12">
                Get User LifePoints
              </button>
            </div>
            <table className="table">
              {this.props.userLifePoints.map((row) => (
                <tr>
                  <td>{moment(row.datetime).format('MMM/DD')}</td>
                  <td>{row.name}</td>
                  <td>{row.description}</td>
                  <td>{getPrettyCategory(row.category)}</td>
                  <td><b>{row.points}</b></td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </AuthUserContext.Consumer>
    )
  }
}

const mapStateToProps = (state) => ({
  userLifePoints: state.lifepoint.userLifePoints
});

const mapDispatchToProps = {
  getUserLifePoints,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLifePoints);
