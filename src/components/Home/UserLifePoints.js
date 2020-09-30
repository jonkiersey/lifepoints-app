import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

import { AuthUserContext } from '../Session';
import { getUserLifePoints } from '../../redux/actions';
import { getPrettyCategory, mapping } from '../../utils';

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

  transformDataForChart = () => {
    const chartData = [
      {
        data: {
          PERSONAL_DEVELOPMENT: 0,
          EXERCISE: 0,
          HOUSEHOLD: 0,
          SOCIAL: 0,
          RELATIONSHIP: 0
        },
        meta: { color: 'blue'}
      }
    ];

    console.log('lifepoints', this.props.userLifePoints);

    console.log('chart data 0', chartData[0]);

    const sums = this.props.userLifePoints.reduce(
      (accumulator, currentValue) => {
        accumulator[currentValue.category] ? accumulator[currentValue.category] += currentValue.points : accumulator[currentValue.category] = currentValue.points;
        return accumulator;
      }, chartData[0].data);

    const maxPoints = Math.max(...Object.values(chartData[0].data));

    console.log({ maxPoints });

    Object.keys(chartData[0].data).forEach((key) => chartData[0].data[key] = sums[key] / maxPoints);

    console.log({ chartData });
    return chartData;
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
              <tbody>
                {this.props.userLifePoints.map((row) => (
                  <tr key={row.datetime}>
                    <td>{moment(row.datetime).format('MMM/DD')}</td>
                    <td>{row.name}</td>
                    <td>{row.description}</td>
                    <td>{getPrettyCategory(row.category)}</td>
                    <td><b>{row.points}</b></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <RadarChart
              captions={mapping}
              data={this.transformDataForChart()}
              size={450}
            />
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
