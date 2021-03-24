import React from 'react'
import './TopView.scss'
import Emil from '../../../assets/emil.jpg'

const TopView = ({ headline, users }) => {
    if (!(Array.isArray(users) && users.length >= 3)) return null

    return (
        <div class='view'>
            <p class='heading'>Preben - Details</p>
            <div class='pic-holder'>
                <div class='place-lable'>
                    <p class='place-lable-text'>2</p>
                </div>
                <img class='pic' src={Emil}/>
            </div>
            <p class='matches-lable'>54 matches</p>
            <div class='stats-view'>
                <div class="stats-item">
                    <p>27 wins</p>
                    <div class="item-no">
                        <p>1</p>
                    </div>
                </div>
                <div class="stats-item">
                    <p>27 losses</p>
                    <div class="item-no">
                        <p>1</p>
                    </div>
                </div>
                <div class="stats-item">
                    <p>27 GF</p>
                    <div class="item-no">
                        <p>1</p>
                    </div>
                </div>
                <div class="stats-item">
                    <p>27 GA</p>
                    <div class="item-no">
                        <p>1</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TopView