import { SAVE_LIFEPOINT } from '../actionTypes';

const initialState = {
    lifepoint: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LIFEPOINT:
            console.log('save lifepoint', action.data);
            return { ...state, lifepoint: action.data };
        default:
            return state;
    }
}