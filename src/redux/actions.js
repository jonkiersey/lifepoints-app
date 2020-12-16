import axios from 'axios';
import moment from 'moment-timezone';

import { GET_LIFEPOINTS_SUCCESS, SAVE_LIFEPOINT_SUCCESS } from './actionTypes';

export const getUserLifePoints = (data) => {
  const timezone = moment.tz.guess();
  const startDate = moment.tz(timezone).endOf('day').subtract(1, 'year').valueOf();
  const endDate = moment.tz(timezone).endOf('day').valueOf();
  return async (dispatch) => {
    const response = await axios.get(`https://s0ca9ntqik.execute-api.us-east-1.amazonaws.com/test/lifepoints?userId=${data.userId}&startDate=${startDate}&endDate=${endDate}`);
    console.log('response', response);
    return dispatch(getLifePointsSuccess(response));
  }
}

export const getLifePointsSuccess = (response) => {
  return { type: GET_LIFEPOINTS_SUCCESS, response }
}

export const saveLifePoint = (data) => {
  return async (dispatch) => {
    console.log('attempted to save lifepoint');
    const response = await axios.put('https://s0ca9ntqik.execute-api.us-east-1.amazonaws.com/test/lifepoints', {
      userId: data.userId,
      category: data.category,
      points: data.points,
      name: data.name,
      description: data.description,
      datetime: data.datetime
    });
    return dispatch(saveLifePointSuccess(response));
  }
}

export const saveLifePointSuccess = (response) => {
  return { type: SAVE_LIFEPOINT_SUCCESS, response }
}