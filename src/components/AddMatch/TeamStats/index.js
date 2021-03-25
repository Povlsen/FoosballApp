import React, { useState } from 'react'
import PlayerStats from './PlayerStats'
import './TeamStats.scss'

const TeamStats = ({ teamStats, onChange, imgLeft, imgRight }) => {
    let extraClass = ''
    if (imgLeft) extraClass += ' img-left'
    if (imgRight) extraClass += ' img-right'

    const updated = stats => {
        onChange([
            ...teamStats.filter(x => x.playerId !== stats.playerId), 
            stats
        ])
    }

    return (
        <div class={'team-stats ' + extraClass} >
            <div>
                <h4 class='gf'>GF</h4>
                <h4 class='ga'>GA</h4>
            </div>            
            {teamStats?.sort((a, b) => a.playerId - b.playerId)?.map(x => <PlayerStats stats={x} updated={updated} />)}
        </div>
    )
}

export default TeamStats