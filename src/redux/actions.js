import axios from 'axios';

import { SAVE_LIFEPOINT_SUCCESS } from './actionTypes';

export const saveLifePoint = (data) => {
    return async (dispatch) => {
        console.log('attempted to save lifepoint');
        const response = await axios.put('https://s0ca9ntqik.execute-api.us-east-1.amazonaws.com/test/lifepoints', {
            userId: 'jon',
            category: data.category,
            points: data.points,
            name: data.name,
            description: data.description
        });
        return dispatch(saveLifePointSuccess(response));
    }
}

export const saveLifePointSuccess = (response) => {
    return { type: SAVE_LIFEPOINT_SUCCESS, response }
}