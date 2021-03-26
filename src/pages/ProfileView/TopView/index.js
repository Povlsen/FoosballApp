import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './TopView.scss'
import back from '../../../assets/back.svg'
import TopViewElement from '../../../Elements/TopViewElement'

const TopView = ({ scoreDetails }) => {
    let {
        playerId,
        displayName,
        rank,
        totalMatches,
        playersProfilePictures,

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

    return( 
        <TopViewElement headline={displayName}>
            <div className='profile-top-view'>
                <Link class='back-btn' to='/'onClick={e => e.stopPropagation()}>
                    <img src={back} />
                </Link>
                <div class='pic-holder'>
                    <div class='place-lable'>
                        <p class='place-lable-text'>{rank}</p>
                    </div>
                    <img class='pic' src={playersProfilePictures?.find(x => x.playerId === playerId)?.image ?? ''}/>
                </div>
                <p class='matches-lable'>{totalMatches} matches</p>
                <div class='stats-view'>
                    {statItem(`${wins} wins`, winsRank)}
                    {statItem(`${losses} losses`, lossesRank)}
                    {statItem(`${goalsFrom} GF`, goalsFromRank)}
                    {statItem(`${goalsAgainst} GA`, goalsAgainstRank)}
                </div>
            </div>
        </TopViewElement>
    )
}
export default TopView