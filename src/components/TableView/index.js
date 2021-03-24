import React from 'react'
import './TableView.scss'
import Forfatter from '../../assets/Forfatter.png'

const TableView = props => (
    <div class='table-view'>
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
            props.users.map((user,index) => (
                <div class='table-data'>
                    <div class='table-item'>
                        <div class='item-number'>{index + 1}</div>
                        <img src={Forfatter} />
                        <p class='item-name'>{user.displayName}</p>
                        <p class='item-wins'>{user.wins}</p>
                        <p class='item-losses'>{user.looses}</p>
                        <p class='item-total'>{user.totalGames}</p>
                        <p class='item-percentage'>{user.winRatio}%</p>
                    </div>
                </div>
            )) 
        }

        

    </div>
)

export default TableView