import React from 'react'
import './TableView.scss'
import Forfatter from '../../assets/Forfatter.png'

const TableView = ({ users }) => (
    <div class='table-view2'>
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
            users.map((user,index) => (
                <div class='table-data'>
                    <a class='table-item'>
                        <div class='item-number'>{index + 1}</div>
                        <img src={Forfatter} />
                        <p class='item-name'>{user.displayName}</p>
                        <p class='item-wins'>{user.wins}</p>
                        <p class='item-losses'>{user.losses}</p>
                        <p class='item-total'>{user.totalMatches}</p>
                        <p class='item-percentage'>{user.winRatio}%</p>
                    </a>
                </div>
            )) 
        }

    </div>
)

export default TableView