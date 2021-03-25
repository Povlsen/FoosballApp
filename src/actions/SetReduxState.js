import axios from 'axios'
import { 
    SET_THEME_COLOR,
} from '../redux/constants'

export const setReduxState = (type, data) => {
    return dispatch => {
        dispatch({
            type,
            data
        })
    }
}

export const SetThemeColor = color => {
    setReduxState(SET_THEME_COLOR, color);
}