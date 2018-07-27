import {
    ACTION_ADD_STACK_ELEMENT,
    ACTION_DELETE_STACK_ELEMENT,
    ACTION_DELETE_STACK_FIRST_ELEMENT,
    ACTION_CLEAR_STACK_ELEMENTS
} from '../constants'


export default function (state = {}, action) {
    let bufStackElements;
    switch (action.type){
        case ACTION_ADD_STACK_ELEMENT:{
            if(state.stackElements){
                let flagPush = true;
                bufStackElements = state.stackElements;
                bufStackElements.forEach((value) => {
                   if(value[0] === action.payload[0])
                       flagPush = false;
                });
                if(flagPush)
                    bufStackElements.push(action.payload);
                return {...state, stackElements: bufStackElements};
            }
            else{
                bufStackElements = [];
                bufStackElements.push(action.payload);
                return {...state, stackElements: bufStackElements};
            }
        }
        case ACTION_DELETE_STACK_ELEMENT:{
            bufStackElements = state.stackElements.filter(item => item[0] !== action.payload);
            return {...state, stackElements:bufStackElements};
        }
        case ACTION_DELETE_STACK_FIRST_ELEMENT:{
            bufStackElements = state.stackElements;
            bufStackElements.shift();
            return {...state, stackElements:bufStackElements};
        }
        case ACTION_CLEAR_STACK_ELEMENTS:{
            return {...state, stackElements:[]};
        }
        default:
            return state;
    }
};