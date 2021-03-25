import { combineReducers } from 'redux'
import players from './states/players'
import scoreboard from './states/scoreboard'
import global from './states/global'

export default combineReducers({
  players,
  scoreboard,
  global
})
