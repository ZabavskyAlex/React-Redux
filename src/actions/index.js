import {ACTION_CHANGE_FIRST_NAME,
        ACTION_CHANGE_LAST_NAME,
        ACTION_CHANGE_EMAIL_NAME,
        ACTION_CHANGE_DIFFICULT_TYPE,
        ACTION_CHANGE_CARD_TYPE,
        ACTION_CHANGE_TIME_GAME,
        ACTION_ADD_STACK_ELEMENT,
        ACTION_DELETE_STACK_ELEMENT,
        ACTION_DELETE_STACK_FIRST_ELEMENT,
        ACTION_CLEAR_STACK_ELEMENTS,
        ACTION_CHANGE_ALL_GAME_RESULTS
} from '../constants'


const actionChangeFirstName = (newFirstName) => {
    return{
        type: ACTION_CHANGE_FIRST_NAME,
        payload:newFirstName
    }
};

const actionChangeLastName = (newLastName) => {
    return{
        type: ACTION_CHANGE_LAST_NAME,
        payload:newLastName
    }
};

const actionChangeEmail = (newEmail) => {
    return{
        type: ACTION_CHANGE_EMAIL_NAME,
        payload:newEmail
    }
};

const actionChangeCardType = (newCardType) => {
  return{
      type:ACTION_CHANGE_CARD_TYPE,
      payload:newCardType
  }
};

const actionChangeDifficultType = (newDifficultType) => {
    return{
        type:ACTION_CHANGE_DIFFICULT_TYPE,
        payload:newDifficultType
    }
};

const actionChangeTimeGame = (newTimeGame) => {
    return{
        type:ACTION_CHANGE_TIME_GAME,
        payload:newTimeGame
    }
};

const actionAddStackElement = (newStackElements) => {
    return{
        type:ACTION_ADD_STACK_ELEMENT,
        payload:newStackElements
    }
};

const actionDeleteStackElement = (deleteStackElements) => {
    return{
        type:ACTION_DELETE_STACK_ELEMENT,
        payload:deleteStackElements
    }
};

const actionDeleteStackFirstElement = () => {
    return{
        type:ACTION_DELETE_STACK_FIRST_ELEMENT
    }
};

const actionClearStackElements = () => {
    return{
        type:ACTION_CLEAR_STACK_ELEMENTS
    }
};

const actionChangeAllGameResults = (allResults) => {
    return{
        type:ACTION_CHANGE_ALL_GAME_RESULTS,
        payload: allResults
    }
};

export {actionChangeEmail,
    actionChangeFirstName,
    actionChangeLastName,
    actionChangeCardType,
    actionChangeDifficultType,
    actionChangeTimeGame,
    actionAddStackElement,
    actionDeleteStackElement,
    actionDeleteStackFirstElement,
    actionClearStackElements,
    actionChangeAllGameResults
};