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
        <div class='table-data'>
            <div class='table-item'>
                <div class='item-number'>4</div>
                <img src={Forfatter} />
                <p class='item-name'>LangNavn</p>
                <p class='item-wins'>11</p>
                <p class='item-losses'>12</p>
                <p class='item-total'>23</p>
                <p class='item-percentage'>47%</p>
            </div>
        </div>
    </div>
)

export default TableView