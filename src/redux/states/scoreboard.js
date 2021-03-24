import { 
  SET_SCORE_BOARD,
} from '../constants'

const initialState = {
  board: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE_BOARD: {
      return {
        ...state,
        board: action.data,
      }
    }
    default:
      return state
  }
}
