import React, { useEffect, useState } from 'react'
import './TopView.scss'
import TopViewElement from '../../../Elements/TopViewElement'

const TopView = ({ headline, players }) => {
    if (!(Array.isArray(players) && players.length >= 3)) return null

    return (
        <TopViewElement headline={headline}>
            <div class='score-board-top-view podium'>
                <div class='podium-item'>
                    <div class='podium-item-1-top'>
                        <div class='pic-holder'>
                            <div class='place-lable'>
                                <p class='place-lable-text'>2</p>
                            </div>
                            <img class='pic' src={players[2].image ?? ''}/>
                        </div>
                        <p class='name-lable'>{players[1].displayName}</p>
                    </div>
                    <div class='podium-item-1'>
                        <p class='wins-lable'>{players[1].wins} wins</p>
                        <p class='percentages-lable'>{players[1].winRatio}%</p>
                    </div>
                </div>
                <div class='podium-item'>
                    <div class='podium-item-2-top'>
                        <div class='pic-holder'>
                            <div class='place-lable'>
                                <p class='place-lable-text'>1</p>
                            </div>
                            <img class='pic' src={players[0].image ?? ''}/>
                        </div>
                        <p class='name-lable'>{players[0].displayName}</p>
                    </div>
                    <div class='podium-item-2'>
                        <p class='wins-lable'>{players[0].wins} wins</p>
                        <p class='percentages-lable'>{players[0].winRatio}%</p>
                    </div>
                </div>
                <div class='podium-item'>
                    <div class='podium-item-3-top'>
                        <div class='pic-holder'>
                            <div class='place-lable'>
                                <p class='place-lable-text'>3</p>
                            </div>
                            <img class='pic' src={players[2].image ?? ''}/>
                        </div>
                        <p class='name-lable'>{players[2].displayName}</p>
                    </div>
                    <div class='podium-item-3'>
                        <p class='wins-lable'>{players[2].wins} wins</p>
                        <p class='percentages-lable'>{players[2].winRatio}%</p>
                    </div>
                </div>
            </div>            
        </TopViewElement>
    )
}

export default TopView