import axios from 'axios'
import { 
    SET_PLAYER_LIST,
} from '../redux/constants'

export const getPlayers = _ => {
    return async dispatch => {
        return axios.get('player/all').then(res => {
            dispatch({
                type: SET_PLAYER_LIST,
                data: res.data
            })
        })
    }
}

export const getPlayerScoreDetails = playerId => {
    return async dispatch => {
        return axios.get('player/GetScoreDetails/' + playerId)
    }
}

export const postPlayer = data => {
    return dispatch => {
        return axios.put('player', data)
    }
}
