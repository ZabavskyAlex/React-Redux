import {
    ACTION_CHANGE_TIME_GAME
} from '../constants'


export default function (state = {}, action) {
    switch (action.type){
        case ACTION_CHANGE_TIME_GAME:
            return {...state, timeGame: action.payload};
        default:
            return state;
    }
};