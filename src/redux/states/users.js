import { 
  SET_USER_LIST, 
  SET_USER_COUNT,
  SET_USER_CONNECTION_ERROR
} from '../constants'

const initialState = {
  list: [],
  count: {},
  connectionError: false,
  lastDataUpdate: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LIST: {
      return {
        ...state,
        list: action.data,
        connectionError: false,
        lastDataUpdate: new Date()
      }
    }
    case SET_USER_COUNT: {
      return {
        ...state,
        count: action.data
      }
    }
    case SET_USER_CONNECTION_ERROR: {
      return {
        ...state,
        connectionError: action.data
      }
    }
    default:
      return state
  }
}
