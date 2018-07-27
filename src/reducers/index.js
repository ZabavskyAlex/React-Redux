import { combineReducers } from 'redux';

import formRegistration from './formRegistration';
import gameSettings from './gameSettings'
import timeGame from './timer'
import stackElements from './stackElements'
import gameResults from './gameResults'

export default combineReducers({
    formRegistration,
    gameSettings,
    timeGame,
    stackElements,
    gameResults
});











