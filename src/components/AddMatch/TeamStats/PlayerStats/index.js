import React, { useState } from 'react'
import { connect } from 'react-redux'
import './PlayerStats.scss'


const PlayerStats = ({ stats, updated, players }) => {
    const renderStatInput = (val, name, classes) => {
        const onChange = e => {
            let value = e.target.value
            if (isNaN(value) || value > 99 || value < 0) 
                return null

            updated({
                ...stats,
                [name]: parseInt(value)
            })
        }
        return (
            <div className={'stat-input ' + classes}>
                <input type='number' placeholder='0' value={val} onChange={onChange} />
            </div>
        )
    }
    return (
        <div>
            <img src={players.find(p => p.playerId === stats.playerId)?.profilePicture ?? ''} />
            {renderStatInput(stats.goalsFrom, 'goalsFrom', 'gf')}
            {renderStatInput(stats.goalsAgainst, 'goalsAgainst', 'ga')}
        </div>
    )
}

const mapStateToProps = ({ players }) => ({
    players: players.list
})

export default connect(mapStateToProps, {
})(PlayerStats)