import initialState from './initialState';
import { HOME_SET } from './actions';

const homeReducer = ( state = initialState, {type, payload}) => {
    switch(type){
        case HOME_SET:
            return {...state, ...payload};
        default:
            return state;
    }
}

export default homeReducer;