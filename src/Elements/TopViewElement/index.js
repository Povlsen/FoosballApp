import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './TopViewElement.scss'
import  { setReduxState } from '../../actions/SetReduxState'

const TopViewElement = ({ themeColor, setReduxState, headline, children}) => {
    useEffect(_ => {
    }, [themeColor])
    return (
        <div class= {`view ${themeColor}`} onClick={_ => setReduxState("SET_THEME_COLOR", themeColor == 'blue' ? 'red' : 'blue')}>
            <p class='heading'>{headline}</p>   
            {children}        
        </div>
    );
};

const mapStateToProps = ({ global }) => ({
    themeColor: global.themeColor
})

export default connect(mapStateToProps, {
    setReduxState
})(TopViewElement)