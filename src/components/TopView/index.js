import React, { Component } from 'react'
import './TopView.scss'
import Emil from '../../assets/emil.jpg'

const TopView = props => (
    <div class='view'>
        <p class='heading'>{props.headline}</p>
        <div class='podium'>
            <div class='podium-item'>
                <div class='podium-item-1-top'>
                    <div class='pic-holder'>
                        <div class='place-lable'>
                            <p class='place-lable-text'>2</p>
                        </div>
                        <img class='pic' src={Emil}/>
                    </div>
                    <p class='name-lable'>Emil</p>
                </div>
                <div class='podium-item-1'>
                    <p class='wins-lable'>17 wins</p>
                    <p class='percentages-lable'>64%</p>
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
                    <p class='name-lable'>Emil</p>
                </div>
                <div class='podium-item-2'>
                    <p class='wins-lable'>17 wins</p>
                    <p class='percentages-lable'>64%</p>
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
                    <p class='name-lable'>Emil</p>
                </div>
                <div class='podium-item-3'>
                    <p class='wins-lable'>17 wins</p>
                    <p class='percentages-lable'>64%</p>
                </div>
            </div>
        </div>
    </div>
)

export default TopView