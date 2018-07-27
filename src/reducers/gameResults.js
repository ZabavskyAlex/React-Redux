import {
    ACTION_CHANGE_ALL_GAME_RESULTS
} from '../constants'


export default function (state = {}, action) {
    switch (action.type){
        case ACTION_CHANGE_ALL_GAME_RESULTS:
            return {...state, allResultsGame: action.payload};
        default:
            return state;
    }
};