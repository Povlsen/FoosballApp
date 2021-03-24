import axios from 'axios'
import { 
    SET_SCORE_BOARD,
} from '../redux/constants'

export const getScoreBoard = _ => {
    return async dispatch => {
        return axios.get('scoreboard').then(res => {
            dispatch({
                type: SET_SCORE_BOARD,
                data: res.data
            })
        })
    }
}