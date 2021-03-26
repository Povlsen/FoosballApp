import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'
import AddUser from '../../../AddUser'

import './PlayerSelector.scss'

const Selector = ({ players, selectedIds, onChange }) => {
    const [showAddPlayerModal, setShowAddPlayerModal] = useState(false)

    const renderPlayerItem = item => {
        let isSelected = selectedIds.includes(item.playerId)
        const onClick = _ => {
            if (isSelected) onChange(selectedIds.filter(x => x !== item.playerId)) //Remove
            else onChange([...selectedIds, item.playerId]) //Add
        }
        return (
            <div class={`list-item ${isSelected ? 'selected' : ''}`} onClick={onClick}>
                <img src={item.profilePicture ?? ''} />
                <p>{item.displayName}</p>
            </div>
        )
    }

    return (
        <>
            <a class='manage-team-lable' onClick={_ => setShowAddPlayerModal(true)}>Manage Team</a>
            <ReactModal
                className={'Overlay'} 
                isOpen={showAddPlayerModal} 
                onRequestClose={_ => setShowAddPlayerModal(false)}
            >
                <div class='team-overlay is-invisible' >
                    <div class='team-list'>
                        <div class='list-item'>
                            <div class='close-btn' onClick={_ => setShowAddPlayerModal(false)}>Close</div>
                        </div>
                        {players?.map(renderPlayerItem)}
                        <div class='list-item button-holder'>
                            <AddUser/>
                        </div>                        
                    </div>
                </div>
            </ReactModal>
        </>
    )
}

const mapStateToProps = ({ players }) => ({
    players: players.list
})

export default connect(mapStateToProps, {
})(Selector)