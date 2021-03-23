import React, { Component } from 'react'
import './TopView.scss'
import Emil from '../../assets/emil.jpg'

const TopView = props => (
    <div class='view'>
        <p class="heading">{props.headline}</p>
        <div class='podium'>
            <div class='podium-item'>
                <div class='podium-item-1-top'>
                    <img class="pic" src={Emil}/>
                    <p>Emil</p>
                </div>
                <div class='podium-item-1'>
                    <p>17 wins</p>
                    <p>64%</p>
                </div>
            </div>
            <div class='podium-item'>
                <div class='podium-item-2-top'>
                    <img class="pic" src={Emil}/>
                    <p>Emil</p>
                </div>
                <div class='podium-item-2'>
                    <p>17 wins</p>
                    <p>64%</p>
                </div>
            </div>
            <div class='podium-item'>
                <div class='podium-item-3-top'>
                    <img class="pic" src={Emil}/>
                    <p>Emil</p>
                </div>
                <div class='podium-item-3'>
                    <p>17 wins</p>
                    <p>64%</p>
                </div>
            </div>
        </div>
    </div>
)

export default TopView