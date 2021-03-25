import React, { useState } from 'react'
import { connect } from 'react-redux'

import PlayerSelector from '../PlayerSelector'
import './TeamSelect.scss'

import Player1 from '../../../assets/Forfatter.png'

const TeamSelect = ({ memberIds, players, onChange }) => {
    return (
        <div class='team-select'>
            <div class='members'>
                {memberIds?.map(x => 
                    <img class='player-img' src={x?.image || Player1} />
                )}
            </div>
            <PlayerSelector 
                selectedIds= {memberIds} 
                onChange={onChange}
            />
        </div>
    )
}

const mapStateToProps = ({ players }) => ({
    players: players.list
})

export default connect(mapStateToProps, {
})(TeamSelect)