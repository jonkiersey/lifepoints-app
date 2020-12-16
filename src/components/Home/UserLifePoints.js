import React from 'react';
import { connect } from 'react-redux';
import cloneDeep from 'lodash.clonedeep';
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
    const emptyChartData = [
      {
        data: {
          PERSONAL_DEVELOPMENT: 0,
          EXERCISE: 0,
          HOUSEHOLD: 0,
          SOCIAL: 0,
          RELATIONSHIP: 0
        },
        meta: { color: 'blue'}
      },
      {
        data: {
          PERSONAL_DEVELOPMENT: 0,
          EXERCISE: 0,
          HOUSEHOLD: 0,
          SOCIAL: 0,
          RELATIONSHIP: 0
        },
        meta: { color: 'red'}
      },
      {
        data: {
          PERSONAL_DEVELOPMENT: 0,
          EXERCISE: 0,
          HOUSEHOLD: 0,
          SOCIAL: 0,
          RELATIONSHIP: 0
        },
        meta: { color: 'green'}
      },
      {
        data: {
          PERSONAL_DEVELOPMENT: 0,
          EXERCISE: 0,
          HOUSEHOLD: 0,
          SOCIAL: 0,
          RELATIONSHIP: 0
        },
        meta: { color: 'purple'}
      }
    ];

    const oneMonthAgo = moment.tz(moment.tz.guess()).endOf('day').subtract(1, 'month').valueOf();
    const oneWeekAgo = moment.tz(moment.tz.guess()).endOf('day').subtract(1, 'week').valueOf();
    const startOfDay = moment.tz(moment.tz.guess()).endOf('day').subtract(1, 'week').valueOf();

    // creating array of form [all life points, last month of points, last week of points, today's points]
    const pointsByTimeRange = [this.props.userLifePoints];
    pointsByTimeRange[1] = pointsByTimeRange[0].filter((point) => point.datetime > oneMonthAgo);
    pointsByTimeRange[2] = pointsByTimeRange[1].filter((point) => point.datetime > oneWeekAgo);
    pointsByTimeRange[3] = pointsByTimeRange[2].filter((point) => point.datetime > startOfDay);

    console.log('pointsByTimeRange', pointsByTimeRange[0].filter((point) => point > oneMonthAgo));

    const points = pointsByTimeRange.map((points, i) => {
      console.log('points', points)
      const sums = points.reduce((acc, cur) => {
        const toAdd = parseInt(cur.points, 10);
        acc[cur.category] ? acc[cur.category] += toAdd : acc[cur.category] = toAdd;
        return acc;
      }, cloneDeep(emptyChartData[i].data));
      console.log('sums', sums)
      const maxPoints = Math.max(...Object.values(sums));
      console.log(maxPoints);
      Object.keys(sums).forEach((key) => maxPoints ? sums[key] = sums[key] / maxPoints : 0);
      return sums;
    });

    const chartData = cloneDeep(emptyChartData).map((item, index) => ({ data: points[index], meta: item.meta }));
    console.log('chartData', chartData);
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
