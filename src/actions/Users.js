import axios from 'axios'
import { 
    SET_USER_LIST, 
    SET_USER_COUNT, 
    SET_USER_CONNECTION_ERROR 
} from '../redux/constants'

export const getUserByNFC = NFCId => {
    return dispatch => {
        return axios.get('users/getbynfc/' + NFCId)
    }
}

export const getUserById = userId => {
    return dispatch => {
        return axios.get('users/getbyid/' + userId)
    }
}

export const getUsers = _ => {
    return async dispatch => {
        return axios.get('users/getall').then(res => {
            dispatch({
                type: SET_USER_LIST,
                data: res.data
            })
        }).catch(_ => {
            dispatch({
                type: SET_USER_CONNECTION_ERROR,
                data: true
            })
        })
    }
}

export const getUsersCount = _ => {
    return async dispatch => {
        return axios.get('users/getuserscount').then(res => {
            dispatch({
                type: SET_USER_COUNT,
                data: res.data
            })
        })
    }
}

export const postUser = data => {
    return dispatch => {
        return axios.post('users/post', data)
    }
}

export const deleteUser = id => {
    return dispatch => {
        return axios.delete('users/delete/' + id)
    }
}

export const checkInOut = NFCId => {
    return dispatch => {
        return axios.post('users/checkinout/' + NFCId)
    }
}

export const postUserTask = data => {
    return dispatch => {
        return axios.post('users/usertask', data)
    }
}

export const getUserTasksStatus = NFCId => {
    return dispatch => {
        return axios.get('users/usertasksstatus/' + NFCId)
    }
}

export const usersCompletedColors = data => {
    return dispatch => {
        return axios.post('users/userscompletedcolors', data)
    }
}

export const postUsersMissingTasks = data => {
    return dispatch => {
        return axios.post('users/usersmissingyasks', data)
    }
}