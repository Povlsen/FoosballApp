import React from 'react'
import './TopView.scss'
import Emil from '../../../assets/emil.jpg'

const TopView = ({ scoreDetails }) => {
    let {
        displayName,
        rank,
        totalMatches,

        wins,
        winsRank,
        losses,
        lossesRank,
        goalsFrom,
        goalsFromRank,
        goalsAgainst,
        goalsAgainstRank
    } = scoreDetails

    const statItem = (title, rank) => (
        <div class='stats-item'>
            <p>{title || ''}</p>
            <div class='item-no'>
                <p>{rank || ''}</p>
            </div>
        </div>
    )

    return (
        <div class='view'>
            <p class='heading'>{displayName || ''} - Details</p>
            <div class='pic-holder'>
                <div class='place-lable'>
                    <p class='place-lable-text'>{rank}</p>
                </div>
                <img class='pic' src={Emil}/>
            </div>
            <p class='matches-lable'>{totalMatches} matches</p>
            <div class='stats-view'>
                {statItem(`${wins} wins`, winsRank)}
                {statItem(`${losses} losses`, lossesRank)}
                {statItem(`${goalsFrom} GF`, goalsFromRank)}
                {statItem(`${goalsAgainst} GA`, goalsAgainstRank)}
            </div>
        </div>
    )
}

export default TopView