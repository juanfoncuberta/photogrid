import initialState from './initialState';
import { FOOTER_SET } from './actions';

const footerReducer = ( state = initialState, {type, payload}) => {
    switch(type){
        case FOOTER_SET:
            return {...state, ...payload};
        default:
            return state;
    }
}

export default footerReducer;