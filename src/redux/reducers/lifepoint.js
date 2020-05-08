import { SAVE_LIFEPOINT } from '../actionTypes';

const initialState = {
    lifepoint: {}
};

const lifepoint = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LIFEPOINT:
            console.log('save lifepoint', action);
            return { ...state, lifepoint: action.data };
        default:
            return state;
    }
}

export default lifepoint;