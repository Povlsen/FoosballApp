import axios from 'axios'

export const addNewMatch = data => {
    return dispatch => {
        return axios.put('match', data)
    }
}
