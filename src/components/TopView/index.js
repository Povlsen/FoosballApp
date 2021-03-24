import React from 'react'
import './TopView.scss'
import Emil from '../../assets/emil.jpg'

const TopView = ({ headline, users }) => {
    if (!(Array.isArray(users) && users.length >= 3)) return null

    return (
        <div class='view'>
            <p class='heading'>{headline}</p>
            <div class='podium'>
                <div class='podium-item'>
                    <div class='podium-item-1-top'>
                        <div class='pic-holder'>
                            <div class='place-lable'>
                                <p class='place-lable-text'>2</p>
                            </div>
                            <img class='pic' src={Emil}/>
                        </div>
                        <p class='name-lable'>{users[1].displayName}</p>
                    </div>
                    <div class='podium-item-1'>
                        <p class='wins-lable'>{users[1].wins} wins</p>
                        <p class='percentages-lable'>{users[1].winRatio} %</p>
                    </div>
                </div>
                <div class='podium-item'>
                    <div class='podium-item-2-top'>
                        <div class='pic-holder'>
                            <div class='place-lable'>
                                <p class='place-lable-text'>1</p>
                            </div>
                            <img class='pic' src={Emil}/>
                        </div>
                        <p class='name-lable'>{users[0].displayName}</p>
                    </div>
                    <div class='podium-item-2'>
                        <p class='wins-lable'>{users[0].wins} wins</p>
                        <p class='percentages-lable'>{users[0].winRatio} %</p>
                    </div>
                </div>
                <div class='podium-item'>
                    <div class='podium-item-3-top'>
                        <div class='pic-holder'>
                            <div class='place-lable'>
                                <p class='place-lable-text'>3</p>
                            </div>
                            <img class='pic' src={Emil}/>
                        </div>
                        <p class='name-lable'>{users[2].displayName}</p>
                    </div>
                    <div class='podium-item-3'>
                        <p class='wins-lable'>{users[2].wins} wins</p>
                        <p class='percentages-lable'>{users[2].winRatio} %</p>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default TopView