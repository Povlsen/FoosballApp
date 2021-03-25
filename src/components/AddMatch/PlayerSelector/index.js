import React, { Component, useState } from 'react'
import Kenneth from '../../../assets/Kenneth.png'
import './PlayerSelector.scss'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'

const Selector = ({players}) => {
    const [showAddTeamModal, setShowAddTeamModal] = useState(false)
        
    return( 
        <>
        {console.log(showAddTeamModal)}
            <a class='manage-team-lable' onClick={_ => setShowAddTeamModal(true)}>Manage Team</a>
        
            <ReactModal className={'Overlay'} isOpen={showAddTeamModal} onRequestClose={_ => setShowAddTeamModal(false)}
            >
                <div class='team-overlay is-invisible' >
                    <div class='team-list'>
                        <div class='list-item' onclcik=''>
                            <div class='close-btn' onClick={_ => setShowAddTeamModal(false)}>Close</div>
                        </div>
                        {
                            players?.map((player) => (
                                <div class='list-item' onclcik=''>
                                    <img src={player.image ?? Kenneth} />
                                    <p>{player.displayName}</p>
                                </div>
                            ))
                        }
                        
                        <div class='list-item button-holder' onclcik=''>
                            <button>Add new player</button>
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