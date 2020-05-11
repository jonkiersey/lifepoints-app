import { SAVE_LIFEPOINT_SUCCESS } from '../actionTypes';

const initialState = {
    lifepointSaveResponse: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LIFEPOINT_SUCCESS:
            return { ...state, lifepointSaveResponse: action.data };
        default:
            return state;
    }
}