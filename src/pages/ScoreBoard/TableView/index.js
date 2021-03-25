import React from 'react'
import { Link } from 'react-router-dom'
import './TableView.scss'
import Forfatter from '../../../assets/Forfatter.png'

const TableView = ({ players }) => (
    <div class='score-board-table-view'>
        <div class='table-heading'>
            <p></p>
            <p class='heading-1'>Player</p>
            <p></p>
            <p>Wins</p>
            <p>Loss</p>
            <p>Total</p>
            <p>Rate</p>
        </div>
        
        {
            players.map((player,index) => (
                <div class='table-data'>
                    <Link to={`/${player.playerId}`} class='table-item'>
                        <div class='item-number'>{index + 1}</div>
                        <img src={player.image ?? Forfatter} />
                        <p class='item-name'>{player.displayName}</p>
                        <p class='item-wins'>{player.wins}</p>
                        <p class='item-losses'>{player.losses}</p>
                        <p class='item-total'>{player.totalMatches}</p>
                        <p class='item-percentage'>{player.winRatio}%</p>
                    </Link>
                </div>
            ))
        }

    </div>
)

export default TableView