import { GET_LIFEPOINTS_SUCCESS, SAVE_LIFEPOINT_SUCCESS } from '../actionTypes';

const initialState = {
    lifepointSaveResponse: null,
    userLifePoints: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LIFEPOINT_SUCCESS:
            return { ...state, lifepointSaveResponse: action.data };
        case GET_LIFEPOINTS_SUCCESS:
            console.log('success', action.response.data);
            return { ...state, userLifePoints: action.response.data.Items };
        default:
            return state;
    }
}