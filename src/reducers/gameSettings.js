import {
    ACTION_CHANGE_DIFFICULT_TYPE,
    ACTION_CHANGE_CARD_TYPE
} from '../constants'


export default function (state = {}, action) {
    switch (action.type){
        case ACTION_CHANGE_DIFFICULT_TYPE:
            return {...state, difficultType: action.payload};
        case ACTION_CHANGE_CARD_TYPE:
            return {...state, cardType: action.payload};
        default:
            return state;
    }
};