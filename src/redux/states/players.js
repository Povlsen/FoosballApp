import { 
  SET_PLAYER_LIST,
} from '../constants'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYER_LIST: {
      return {
        ...state,
        list: action.data,
      }
    }
    default:
      return state
  }
}
