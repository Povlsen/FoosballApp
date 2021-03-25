import React, { useEffect, useState } from 'react'
import './TopView.scss'
import Emil from '../../../assets/emil.jpg'
import ls from 'local-storage'

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

    const initialView = () => window.localStorage.getItem('view') ?? 'view'
    const [view, setView] = useState(initialView)
    useEffect(_ => {
        window.localStorage.setItem('view', view)
    }, [view])

    return( 
        <div class={view} onClick={_ => setView(view == 'view' ? 'view revert' : 'view')}>
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