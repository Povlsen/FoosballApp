import axios from 'axios'

export const addMatch = data => {
    return dispatch => {
        return axios.put('match', data)
    }
}
