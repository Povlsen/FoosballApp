import { combineReducers } from 'redux'
import players from './states/players'
import scoreboard from './states/scoreboard'

export default combineReducers({
  players,
  scoreboard
})
