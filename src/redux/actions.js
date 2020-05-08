import { SAVE_LIFEPOINT } from './actionTypes';

export const saveLifePoint = (data) => {
    return {
        type: SAVE_LIFEPOINT,
        data
    }
}