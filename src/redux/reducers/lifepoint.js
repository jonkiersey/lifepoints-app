import { SAVE_LIFEPOINT } from '../actionTypes';

const initialState = {
    lifepoint: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LIFEPOINT:
            return Object.assign({}, state, { lifepoint: action.data });
        default:
            return state;
    }
}