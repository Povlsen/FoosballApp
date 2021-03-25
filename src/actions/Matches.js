import axios from 'axios'

export const addNewMatch = data => {
    console.log(data)
    return dispatch => {
        return axios.put('match', data)
    }
}
