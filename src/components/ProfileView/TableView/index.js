import React from 'react'
import './TableView.scss'
import Forfatter from '../../../assets/Forfatter.png'

const TableView = ({ headline, users }) => {
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
            
            {
                <div class='table-data'>
                    <a class='table-item'>
                        <p></p>
                        <img src={Forfatter} />
                        <img src={Forfatter} />
                        <p class="vs">vs.</p>
                        <img src={Forfatter} />
                        <img src={Forfatter} />
                        <p class='item-score'>07-10</p>
                        <p class='item-gf'>1</p>
                        <p class='item-ga'>1</p>
                    </a>
                </div>
            }
    </div>
    )
}

export default TableView