import {
    ACTION_CHANGE_FIRST_NAME,
    ACTION_CHANGE_LAST_NAME,
    ACTION_CHANGE_EMAIL_NAME
} from '../constants'


export default function (state = {}, action) {
    switch (action.type){
        case ACTION_CHANGE_FIRST_NAME:
            return {...state, firstName: action.payload};
        case ACTION_CHANGE_LAST_NAME:
            return {...state, lastName: action.payload};
        case ACTION_CHANGE_EMAIL_NAME:
            return {...state, email: action.payload};
        default:
            return state
    }
};
