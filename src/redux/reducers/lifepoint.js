import { SAVE_LIFEPOINT } from '../actionTypes';

const initialState = {
    lifepoint: {}
};

let i = 0

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LIFEPOINT:
            console.log('save lifepoint', action.data);
            return { ...state, lifepoint: 'hello' };
        default:
            console.log('default action');
            i += 1;
            return { ...state, default: i, lifepoint: 'goodbye' };
    }
}