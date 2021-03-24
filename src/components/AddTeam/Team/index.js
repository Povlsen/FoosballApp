import React, { useState } from 'react';
import ReactModal from 'react-modal';

import './Team.scss';

import Player from '../Player';

const Team = (id, player1ImgSrc, player2ImgSrc) => {
    return (
        <div id={id} class='playerGrid'>
            <Player imgSrc={player1ImgSrc}/>
            <Player imgSrc={player2ImgSrc}/>
        </div>);
}

export default Team;