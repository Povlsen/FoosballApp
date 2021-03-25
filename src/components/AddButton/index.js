import React, { useState, useEffect } from 'react'
import plus from '../../assets/plus.svg'

import { connect } from 'react-redux'
import  { setReduxState } from '../../actions/SetReduxState'

import AddTeam from '../AddMatch'
import './AddButton.scss'

const AddButton = themeColor => {
    const [showAddTeamModal, setShowAddTeamModal] = useState(false)
    useEffect(_ => {
    }, [themeColor])

    return (
        <div>
            <div class="add-button">
                <AddTeam show={showAddTeamModal} handleClose={_ => setShowAddTeamModal(false)} />
                <button class={themeColor.themeColor} onClick={_ => setShowAddTeamModal(true)}>
                    <img src={plus} />
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ global }) => ({
    themeColor: global.themeColor
})

export default connect(mapStateToProps, {
    setReduxState
})(AddButton)