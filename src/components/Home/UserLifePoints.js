import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { AuthUserContext } from '../Session';
import { getUserLifePoints } from '../../redux/actions';

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
          <div>
            <button onClick={() => this.handleGetUserLifePoints(authUser)}>
              Get User LifePoints
            </button>
            <table>
              {this.props.userLifePoints.map((row) => (
                <tr>
                  <td>{moment(row.datetime).format()}</td>
                  <td>{row.name}</td>
                  <td>{row.description}</td>
                  <td>{row.category}</td>
                  <td>{row.points}</td>
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
