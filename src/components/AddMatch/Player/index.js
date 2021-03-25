import React, { useState } from 'react'
import ReactModal from 'react-modal'

import './Player.scss'

const Player = (imgSrc) => {
    return (
        <div id='teamOne' class='playerGrid'>
            <img src={imgSrc}></img>
            <div><input type='number' maxlength='2' placeholder='0'/></div>
            <div><input type='number' maxlength='2' placeholder='0'/></div>
        </div>);
};

export default Player;