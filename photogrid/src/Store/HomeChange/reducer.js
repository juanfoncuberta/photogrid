import initialState from './initialState';
import { HOME_SET_WARNING_VISIBILE } from './actions';

const homeSetReducer = ( state = initialState, {type, payload}) => {
    switch(type){
        case HOME_SET_WARNING_VISIBILE:
            return {...state, warningVisible: payload};
        default:
            return state;
    }
}

export default homeSetReducer;