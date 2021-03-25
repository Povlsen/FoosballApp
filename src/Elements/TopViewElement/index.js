import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import  { setReduxState } from '../../actions/SetReduxState'

import { SET_THEME_COLOR } from '../../redux/constants'
import './TopViewElement.scss'

const TopViewElement = ({ themeColor, setReduxState, headline, children}) => {
    return (
        <div class= {`top-view ${themeColor}`} onClick={_ => setReduxState(SET_THEME_COLOR, themeColor == 'blue' ? 'red' : 'blue')}>
            <p class='heading'>{headline}</p>   
            {children}        
        </div>
    )
}

const mapStateToProps = ({ global }) => ({
    themeColor: global.themeColor
})

export default connect(mapStateToProps, {
    setReduxState
})(TopViewElement)