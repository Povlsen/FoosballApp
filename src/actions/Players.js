import axios from 'axios'
import { 
    SET_PLAYER_LIST,
} from '../redux/constants'

export const getPlayers = _ => {
    return async dispatch => {
        return axios.get('players/get').then(res => {
            dispatch({
                type: SET_PLAYER_LIST,
                data: res.data
            })
        })
    }
}

/*export const getPlayerById = userId => {
    return dispatch => {
        return axios.get('users/getbyid/' + userId)
    }
}*/

export const postPlayer = data => {
    return dispatch => {
        return axios.post('players/post', data)
    }
}

export const deletePlayer = id => {
    return dispatch => {
        return axios.delete('players/delete/' + id)
    }
}