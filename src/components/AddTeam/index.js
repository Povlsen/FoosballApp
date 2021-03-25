import React, { useState } from 'react';
import ReactModal from 'react-modal';

<<<<<<< HEAD
import './AddMatch.scss'
=======
import './AddTeam.scss'
>>>>>>> 2acb018f298b22990106ada6406cc469f8aafd38
import Player1 from '../../assets/Forfatter.png'
import Player2 from '../../assets/emil.jpg'
import Player3 from '../../assets/Kenneth.png'
import Player4 from '../../assets/Nikolai.png'

import Team from './Team';

var teamOnePoints = 0;
var teamTwoPoints = 0;

var selectedUsers = [51,52,321,46];

const AddTeam = ({handleClose, show, children }) => {
    if (show != true)
        return null;

    return (
        <ReactModal 
            isOpen={show} 
            onRequestClose={handleClose} 
            className={'greyOverlay'}
            contentElement={(props, children) => <div {...props} onClick={handleClose}>{children}</div>}
            >
            <div id='background' onClick={e => e.stopPropagation()}>
                <h3 id='title'>New Match</h3>
                <div class='pointGrid'>
                    <div>
                        <div id='teamOnePoints'><p>{teamOnePoints}</p></div>
                    </div>
                    <div>
                        <div id='teamTwoPoints'><p>{teamTwoPoints}</p></div>
                    </div>
                </div>
                <div class="selectTeamGrid">
                    <div>
                        <img src={Player1}></img>
                        <img src={Player2}></img>
                        <button>Manage team &gt;</button>
                    </div>
                    <h4>Vs.</h4>
                    <div>
                        <img src={Player3}></img>
                        <img src={Player4}></img>
                        <button>Manage team &gt;</button>
                    </div>
                </div>
                <div id='teamsHolder' class='teamsGrid'>
                    <div id='teamOne' class='playerGrid'>
                        <span width='50px'></span>
                        <h4>GF</h4>
                        <h4>GA</h4>
                        <img src={Player1}></img>
                        <div><input id='player1GF' type='number' maxlength='2' placeholder='0'/></div>
                        <div><input id='player1GA' type='number' maxlength='2' placeholder='0'/></div>
                        <img src={Player2}></img>
                        <div><input id='player2GF' type='number' maxlength='2' placeholder='0'/></div>
                        <div><input id='player2GA' type='number' maxlength='2' placeholder='0'/></div>
                    </div>
                    <div id='teamTwo'class='playerGrid'>
                        <h4>GF</h4>
                        <h4>GA</h4>
                        <span width='50px'></span>
                        <div><input id='player3GF' type='number' maxlength='2' placeholder='0'/></div>
                        <div><input id='player3GA' type='number' maxlength='2' placeholder='0'/></div>
                        <img src={Player3}></img>
                        <div><input id='player4GF' type='number' maxlength='2' placeholder='0'/></div>
                        <div><input id='player4GA' type='number' maxlength='2' placeholder='0'/></div>
                        <img src={Player4}></img>
                    </div>
                </div>
                <div class='buttonHolder'>
                    <button onClick={sendMatch}>Add</button>
                </div>
            </div>
        </ReactModal>
    );
    /*return (
        <ReactModal 
            isOpen={show} 
            onRequestClose={handleClose} 
            className={'greyOverlay'}
            contentElement={(props, children) => <div {...props} onClick={handleClose}>{children}</div>}
            >
            <div id='background' onClick={e => e.stopPropagation()}>
                <h3 id='title'>New Match</h3>
                <div class='pointGrid'>
                    <div>
                        <div id='teamOnePoints'><p>{teamOnePoints}</p></div>
                    </div>
                    <div>
                        <div id='teamTwoPoints'><p>{teamTwoPoints}</p></div>
                    </div>
                </div>
                <div class="selectTeamGrid">
                    <div>
                        <img src={Player1}></img>
                        <img src={Player2}></img>
                        <button>Manage team &gt;</button>
                    </div>
                    <h4>Vs.</h4>
                    <div>
                        <img src={Player3}></img>
                        <img src={Player4}></img>
                        <button>Manage team &gt;</button>
                    </div>
                </div>
                <div id='teamsHolder'>
                    <div id='teamOne' class="teamsGrid">
                        <span width='50px'></span>
                        <h4>GF</h4>
                        <h4>GA</h4>
                        <Team id='TeamOne' player1ImgSrc={Player1} player2ImgSrc={Player2}/>
                    </div>
                    <div id='teamTwo' class="teamsGrid">
                        <h4>GF</h4>
                        <h4>GA</h4>
                        <span width='50px'></span>
                        <Team id='TeamTwo' player1ImgSrc={Player3} player2ImgSrc={Player4}/>
                    </div>
                </div>
                <div class='buttonHolder'>
                    <button onClick={sendMatch}>Add</button>
                </div>
            </div>
        </ReactModal>
    );*/
};

function enforce_maxlength(event) {
    var t = event.target;
    if (t.hasAttribute('maxlength')) {
        t.value = t.value.slice(0, t.getAttribute('maxlength'));
    }
}
document.body.addEventListener('input', enforce_maxlength);

function updateTotalScore(){
    teamOnePoints = getNumberVal('player1GF') + getNumberVal('player2GF');
    document.getElementById('teamOnePoints').innerHTML = teamOnePoints;
    teamTwoPoints = getNumberVal('player3GF') + getNumberVal('player4GF')
    document.getElementById('teamTwoPoints').innerHTML = teamTwoPoints;
}
document.body.addEventListener('input', updateTotalScore);

function getNumberVal(elementId){
    return parseInt(document.getElementById(elementId).value, 10) || 0;
}

function sendMatch(){
    var i = 0;
    var players = [];
    selectedUsers.forEach(element => {
        i++;
        var GF = getNumberVal('player'+i+'GF');
        var GA = getNumberVal('player'+i+'GA');
        var player = 'playerId/":'+element+',/"goalsFrom/":'+GF+',/"goalsAgainst/":'+GA;
        players.push(player);
    });
    console.log(players)
}

export default AddTeam