import { 
        SET_THEME_COLOR,
    } from '../constants'

    const initialState = {
        themeColor: window.localStorage.getItem('themeColor') ??  'blue'
    }

    export default (state = initialState, action) => {
        switch (action.type) {
        case SET_THEME_COLOR: {
            window.localStorage.setItem('themeColor', action.data)
            return {
                ...state,
                themeColor: action.data
            }
        }
        default:
            return state
    }
}