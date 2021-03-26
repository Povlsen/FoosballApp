import React from 'react'
import './TableView.scss'

const TableView = ({ aggregatedMatchs, playersProfilePictures }) => {    
    const renderMatchGroup = group => {
        const getTeamImages = playerIds => {
            const getImage = id => playersProfilePictures?.find(x => x.playerId === id)?.image
            return (
                <>
                    {playerIds?.map(p => <img src={getImage(p) ?? ''} />)}  
                </>
            )
        }

        const formatNum = num => (
            num.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
              })
        )

        const renderMatchItem = match => (
            <a class={`table-item ${match.playerHasWon ? 'won' : 'lost'}`}>
                <p></p>
                {getTeamImages(match.playerTeamPlayerIds)}
                <p class='vs'>vs.</p>
                {getTeamImages(match.opponentTeamPlayerIds)}
                <p class='item-score'>{`${formatNum(match.playerTeamScore)}-${formatNum(match.opponentTeamScore)}`}</p>
                <p class='item-gf'>{match.goalsFrom}</p>
                <p class='item-ga'>{match.goalsAgainst}</p>
            </a>
        )
        return (
            <>
                <div class='table-group-header'>{new Date(group.date).toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })}</div>
                {group.matchScores?.map(renderMatchItem)}
            </>
        )
    }

    return (
        <div class='table-view'>
            <div class='table-heading'>
                <p></p>
                <p class='heading-1'>Teams</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p>Score</p>
                <p>GF</p>
                <p>GA</p>
            </div>
            
            <div class='table-data'>
                {aggregatedMatchs?.map(renderMatchGroup)}                
            </div>
        </div>
    )
}

export default TableView